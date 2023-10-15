import React from 'react';
import './App.css';
import PostsList from './components/PostsList';

// Sample posts data
const postsData = [
    {
        id: 1,
        username:"Akif Erdem Tanyeri",
        description:"Merhabalar, evimi boşaltıyorum. Eşyalarımı da cüzi fiyatlara bırakmayı düşünüyorum. İlgilenenler DM'den ulaşabilir.", 
        imageUrl:"https://www.cnet.com/a/img/resize/4cfcf0a76f06cfd46551c5fdb3f77362c618aeb6/hub/2023/04/14/9cacb2b9-c38a-4454-a82c-947b632e0710/clean-empty-house-gettyimages-1031043754.jpg?auto=webp&fit=crop&height=900&width=1200",
        userProfileImageUrl:"https://img.freepik.com/premium-vector/anonymous-user-circle-icon-vector-illustration-flat-style-with-long-shadow_520826-1931.jpg"
    },
    {
        id: 2,
        username: "Ege Şirvan",
        description: "Algorithms I kitabını lazım olan birine ücret almadan bırakacağım.",
        imageUrl: "https://m.media-amazon.com/images/I/81JCp+3S5tL._AC_UF894,1000_QL80_.jpg",
        userProfileImageUrl: "https://img.freepik.com/premium-vector/anonymous-user-circle-icon-vector-illustration-flat-style-with-long-shadow_520826-1931.jpg"
    },

];

function App() {
    return (
        <div className="app">
            <PostsList posts={postsData} />
        </div>
    );
}

export default App;
