'use client'
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import axios from 'axios';
import { useEffect, useState } from 'react';

function Page() {
  const router = useRouter();

  
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get('https://thevibes.tech/api/blogs?populate=*');
        setArticles(response.data.data);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div className='pb-10'>
      <div className="relative w-[90%] mt-0 max-w-[1150px] mx-auto rounded-xl overflow-hidden">
        {/* Background Image */}
        <div className="relative">
          <img src="assets/BlogHeader.png" alt="Hero Background" className="w-full h-[350px] object-cover" />
        </div>

        {/* Content */}
       
      </div>
      <p className=" text-center text-[28px] sm:text-4xl font-semibold my-10 leading-[59px]">Welcome to our blogs</p>

      {/* Article Grid */}
      <div className="grid md:grid-cols-3 grid-cols-1  gap-6 p-6 max-w-[1200px] mx-auto">
        {articles.map((article) => (
          <div
            key={article.id}
            onClick={() => router.push(`/article/${article.id}`)}
            className="bg-white cursor-pointer m-auto transition-all duration-300 flex flex-col justify-start hover:scale-105 border-2 rounded-lg p-4 max-w-[392px] h-[390px]"
          >
            <Image
              width={392}
              height={160}
              src={ article?.hero?.url ? `https://thevibes.tech${article?.hero?.url}` : "https://via.placeholder.com/800x400"}
              alt={article.title}
              className="w-full object-cover rounded-lg max-w-[360px] h-60"
            />
            <span className="mt-4 text-[#7000ff] text-sm font-normal ">{article.category}</span>
            <h2 className="text-lg font-semibold mt-1">{article.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page;
