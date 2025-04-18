
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import TrendingPostsPage from './pages/TrendingPostsPage';
import TopUsersPage from './pages/TopUsersPage';
import FeedPage from './pages/FeedPage';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';

const App = () => {
    return (
        <Router>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" style={{ flexGrow: 1 }}>
                        Social Media Analytics
                    </Typography>
                    <Button color="inherit" component={Link} to="/">Feed</Button>
                    <Button color="inherit" component={Link} to="/top-users">Top Users</Button>
                    <Button color="inherit" component={Link} to="/trending-posts">Trending Posts</Button>
                </Toolbar>
            </AppBar>
            <Container>
                <Routes>
                    <Route path="/" element={<FeedPage />} />
                    <Route path="/top-users" element={<TopUsersPage />} />
                    <Route path="/trending-posts" element={<TrendingPostsPage />} />
                </Routes>
            </Container>
        </Router>
    );
};

export default App;