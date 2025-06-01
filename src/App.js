import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Typography, CircularProgress, Box, Grid, Pagination } from "@mui/material";
import Header from "./components/Header.tsx";
import PostCard from "./components/PostCard.tsx";
import Footer from "./components/Footer.tsx";

const POSTS_PER_PAGE = 8;

function App() {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [expandedPostId, setExpandedPostId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [postsRes, usersRes] = await Promise.all([
          axios.get("https://jsonplaceholder.typicode.com/posts"),
          axios.get("https://jsonplaceholder.typicode.com/users"),
        ]);
        setPosts(postsRes.data);
        setUsers(usersRes.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching data", err);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const getAuthor = (userId) => users.find((user) => user.id === userId);

  const paginatedPosts = posts.slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE);

  const handleReadMore = (postId) => {
    setExpandedPostId((prevId) => (prevId === postId ? null : postId));
  };

  return (
    <><Container maxWidth="lg" sx={{ mt: 4 }}>
      <Header />
      {loading ? (
        <Box display="flex" justifyContent="center" mt={4}>
          <CircularProgress />
        </Box>
      ) : (
        <>
          <Grid container spacing={4}>
            {paginatedPosts.map((post) => (
              <PostCard
                key={post.id}
                post={post}
                author={getAuthor(post.userId)}
                isExpanded={expandedPostId === post.id}
                onReadMore={() => handleReadMore(post.id)} />
            ))}
          </Grid>

          <Box mt={4} display="flex" justifyContent="center">
            <Pagination
              count={Math.ceil(posts.length / POSTS_PER_PAGE)}
              page={page}
              onChange={(e, value) => setPage(value)}
              color="primary"
              shape="rounded" />
          </Box>
        </>
      )}
    </Container>
    <Footer />
    </>
  );
}

export default App;