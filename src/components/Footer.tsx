import { Box, Typography, Link } from "@mui/material";

export default function Footer() {
  return (
    <Box sx={{ mt: 6, py: 3, textAlign: "center", color: "gray" }}>
      <Box sx={{ display: "flex", justifyContent: "center", gap: 3, flexWrap: "wrap", mb: 1 }}>
        {["About", "Help", "Press", "API", "Jobs", "Privacy", "Terms"].map((item) => (
          <Link key={item} href="#" underline="hover" color="inherit" variant="body2">
            {item}
          </Link>
        ))}
      </Box>
      <Typography variant="caption">© {new Date().getFullYear()} MyBlog from Alaa</Typography>
    </Box>
  );
}
