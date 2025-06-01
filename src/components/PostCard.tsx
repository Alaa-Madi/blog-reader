import { Card, CardContent, CardMedia, Avatar, Typography, Button, Grid, Box } from "@mui/material";

const PostCard = ({ post, author, isExpanded, onReadMore }) => {
  return (
    <Grid container sx={{width:'100%', display: 'flex', alignItems: 'center' }}>
      <Card
        sx={{
          height: "100%",
          width: '60%',
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignSelf: "center",
          borderRadius: 3,
          boxShadow: 3,
          overflow: "hidden",
          mx: "auto",
        }}
      >
        <Box sx={{ height: 'auto', backgroundColor: "#f0f0f0" }}>
          <CardMedia
            component="img"
            image={`https://picsum.photos/seed/${post.id}/300/200`}
            alt="Blog"
            sx={{
              height: "100%",
              width: "100%",
              objectFit: "contain",
            }}
          />
        </Box>

        <CardContent>
          <Box display="flex" alignItems="center" gap={1} mb={1}>
            <Avatar sx={{ width: 30, height: 30 }}>
              {author?.name?.charAt(0)}
            </Avatar>
            <Typography variant="body2" color="text.secondary">
              {author?.name}
            </Typography>
          </Box>

          <Typography variant="h6" gutterBottom>
            {post.title}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {isExpanded
              ? post.body
              : post.body.length > 100
                ? `${post.body.slice(0, 100)}...`
                : post.body}
          </Typography>

          {post.body.length > 100 && (
            <Button size="small" onClick={onReadMore} sx={{ mt: 1 }}>
              {isExpanded ? "Show Less" : "Read More"}
            </Button>
          )}
        </CardContent>
      </Card>
    </Grid>
  );
};

export default PostCard;
