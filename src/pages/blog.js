import BlogPosts from '../components/Blog/BlogPosts'
import Header from '../components/Header/Header';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Footer from '../components/Footer/Footer';

import { Layout } from '../layout/Layout';


const Blog = () => {
    return (
        <Layout>
            <BgAnimation />
            <BlogPosts />
      </Layout>
    );
  };
  
  export default Blog;
  