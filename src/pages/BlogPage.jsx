import React from 'react';
import PageHeader from '../components/PageHeader';

const BlogPage = () => {
  const posts = [
    {
      title: 'Top 5 Bridal Makeup Trends for 2026',
      date: 'July 15, 2026',
      excerpt: 'Discover the latest trends in bridal makeup that will make you look stunning on your big day.',
      image: 'https://via.placeholder.com/600x400?text=Bridal+Trends'
    },
    {
      title: 'Essential Skin Care Routine for Glowing Skin',
      date: 'June 28, 2026',
      excerpt: 'A step-by-step guide to maintaining healthy, glowing skin throughout the year.',
      image: 'https://via.placeholder.com/600x400?text=Skin+Care'
    },
    {
      title: 'How to Choose the Right Hair Color',
      date: 'June 10, 2026',
      excerpt: 'Struggling to find the perfect hair color? Read our expert tips to match your skin tone.',
      image: 'https://via.placeholder.com/600x400?text=Hair+Color'
    }
  ];

  return (
    <>
      <PageHeader title="Latest Blogs" breadcrumbs={[{ label: 'Blogs' }]} />
      
      <div className="container" style={{ padding: '60px 15px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px' }}>
          {posts.map((post, index) => (
            <div key={index} style={{ border: '1px solid #eee', borderRadius: '10px', overflow: 'hidden' }}>
              <img src={post.image} alt={post.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
              <div style={{ padding: '20px' }}>
                <span style={{ color: 'var(--primary-color)', fontSize: '0.9rem', fontWeight: 'bold' }}>{post.date}</span>
                <h3 style={{ margin: '10px 0', fontSize: '1.2rem' }}>{post.title}</h3>
                <p style={{ color: '#666', marginBottom: '20px' }}>{post.excerpt}</p>
                <button className="btn-outline-primary" style={{ padding: '8px 20px', fontSize: '0.9rem' }}>Read More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogPage;
