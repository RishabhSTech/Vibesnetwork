"use client";
import { useRouter, useParams } from "next/navigation";
import Image from "next/image";
import { blogs } from "/data/blogs";

export default function ArticlePage() {
  const params = useParams();
  const { id } = params;
  const router = useRouter();

  const article = blogs.find((b) => b.slug === id || b.id === Number(id));
  if (!article) return <p className="text-center mt-10">Blog not found.</p>;

  const shareContent = (platform) => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    const title = article.title;

    const shareUrls = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      whatsapp: `https://wa.me/?text=${encodeURIComponent(title + " " + url)}`,
      telegram: `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
      messenger: `https://www.messenger.com/t/?link=${encodeURIComponent(url)}`,
      email: `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent("Check this out: " + url)}`,
    };

    if (navigator.share && !platform) {
      navigator.share({ title, text: title, url }).catch((error) => console.error("Error sharing:", error));
    } else {
      window.open(shareUrls[platform], "_blank", "noopener,noreferrer");
    }
  };

  const related = blogs.filter((b) => b.id !== article.id).slice(0, 3);

  return (
    <div className="flex flex-col justify-center items-center mx-auto my-10 bg-white overflow-hidden">
      <div className="relative w-full h-96">
        <Image
          src={article.image}
          alt={article.title}
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="relative z-10 mx-10 bg-white p-6 sm:w-1/2 m-auto rounded-t-[20px] -mt-24">
        <h1 className="max-w-[781.69px] text-[#01004a] text-4xl font-bold leading-[45px]">
          {article.title}
        </h1>
        <p className="w-[219.73px] mt-10 text-[#576e89] text-sm font-normal leading-[17.50px]">
          Published on {article.published || "N/A"}
        </p>

        {/* Content */}
        <div className="prose prose-lg mt-10">
          <div dangerouslySetInnerHTML={{ __html: article.content }} />
        </div>

        <div onClick={() => router.push("/blogs")} className="w-fit mt-5 text-[#ff3700] text-lg font-bold font-['Inter'] leading-relaxed">{`< BLOG HOME`}</div>
        <div className="w-fit text-center mt-10 text-[#546e8e] sm:text-2xl m-auto font-medium font-['Inter'] leading-relaxed">Dont forget to share this post</div>
        <div className="flex flex-row justify-center items-center gap-4 mt-4">
          <div onClick={() => shareContent('twitter')} className="w-[40px] h-[40px]  rounded-full flex justify-center items-center cursor-pointer">
          <div data-svg-wrapper className="relative">
<svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.1193 2.40161H23.7309L15.8407 11.4196L25.1229 23.6909H17.855L12.1626 16.2484L5.64913 23.6909H2.0354L10.4747 14.0452L1.57031 2.40161H9.02267L14.1681 9.20437L20.1193 2.40161ZM18.8518 21.5293H20.853L7.93528 4.44975H5.78778L18.8518 21.5293Z" fill="#586E8A"/>
</svg>
</div>
          </div>
          <div onClick={() => shareContent('facebook')} className="w-[40px] h-[40px] rounded-full flex justify-center items-center cursor-pointer">
            <div data-svg-wrapper className="relative">
<svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_274_1544)">
<path d="M13.6349 0.363281C6.53988 0.363281 0.788086 6.11507 0.788086 13.2101C0.788086 19.2348 4.93608 24.2903 10.5316 25.6788V17.1361H7.88263V13.2101H10.5316V11.5185C10.5316 7.1459 12.5106 5.11918 16.8035 5.11918C17.6175 5.11918 19.0219 5.279 19.5964 5.4383V8.99688C19.2932 8.96502 18.7665 8.94909 18.1123 8.94909C16.0059 8.94909 15.192 9.74713 15.192 11.8216V13.2101H19.3883L18.6673 17.1361H15.192V25.9629C21.5532 25.1947 26.4823 19.7785 26.4823 13.2101C26.4818 6.11507 20.73 0.363281 13.6349 0.363281Z" fill="#586E8A"/>
</g>
<defs>
<clipPath id="clip0_274_1544">
<rect width="25.6937" height="25.6937" fill="white" transform="translate(0.788086 0.363281)"/>
</clipPath>
</defs>
</svg>
</div>
          </div>
          <div  onClick={() => shareContent('linkedin')} className="w-[40px] h-[40px]  rounded-full flex justify-center items-center cursor-pointer">
          <div data-svg-wrapper className="relative">
<svg width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_274_1543)">
<path d="M23.867 0.363281H1.97211C0.923288 0.363281 0.0751953 1.1913 0.0751953 2.21503V24.2002C0.0751953 25.2239 0.923288 26.057 1.97211 26.057H23.867C24.9158 26.057 25.7689 25.2239 25.7689 24.2052V2.21503C25.7689 1.1913 24.9158 0.363281 23.867 0.363281ZM7.69799 22.2581H3.88408V9.9934H7.69799V22.2581ZM5.79104 8.3223C4.56657 8.3223 3.57797 7.3337 3.57797 6.11425C3.57797 4.89481 4.56657 3.9062 5.79104 3.9062C7.01049 3.9062 7.99909 4.89481 7.99909 6.11425C7.99909 7.32868 7.01049 8.3223 5.79104 8.3223ZM21.97 22.2581H18.1611V16.2964C18.1611 14.8762 18.1361 13.0445 16.1789 13.0445C14.1967 13.0445 13.8956 14.5952 13.8956 16.196V22.2581H10.0917V9.9934H13.745V11.6695H13.7952C14.3021 10.706 15.5466 9.68728 17.3984 9.68728C21.2574 9.68728 21.97 12.2265 21.97 15.5286V22.2581Z" fill="#586E8A"/>
</g>
<defs>
<clipPath id="clip0_274_1543">
<rect width="25.6937" height="25.6937" fill="white" transform="translate(0.0751953 0.363281)"/>
</clipPath>
</defs>
</svg>
</div>
          </div>
          <div onClick={() => shareContent('messenger')} className="w-[40px] h-[40px] rounded-full flex justify-center items-center cursor-pointer">
          <div data-svg-wrapper className="relative">
<svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.362305 12.824C0.362305 5.66509 5.97317 0.362549 13.2092 0.362549C20.4451 0.362549 26.056 5.6683 26.056 12.8272C26.056 19.9861 20.4451 25.2886 13.2092 25.2886C11.9084 25.2886 10.6623 25.1152 9.48999 24.794C9.26196 24.733 9.01787 24.7491 8.80268 24.8454L6.25258 25.9695C6.09857 26.0375 5.93022 26.0665 5.76235 26.0542C5.59447 26.0418 5.43219 25.9884 5.28978 25.8987C5.14738 25.8089 5.0292 25.6855 4.94563 25.5394C4.86206 25.3933 4.81567 25.2289 4.81053 25.0606L4.73987 22.7739C4.73344 22.4912 4.60498 22.2279 4.39621 22.0416C1.8975 19.8063 0.362305 16.5688 0.362305 12.824ZM9.26839 10.4827L5.49463 16.4693C5.13171 17.0442 5.83829 17.6897 6.37785 17.2786L10.431 14.2018C10.5644 14.1005 10.7271 14.0454 10.8946 14.0448C11.0621 14.0443 11.2252 14.0982 11.3592 14.1986L14.3622 16.45C14.5752 16.61 14.819 16.724 15.0783 16.785C15.3376 16.846 15.6067 16.8525 15.8687 16.8042C16.1307 16.756 16.3798 16.6539 16.6003 16.5045C16.8208 16.355 17.008 16.1615 17.1499 15.9361L20.9269 9.95272C21.2866 9.37783 20.58 8.72906 20.0405 9.14016L15.9873 12.217C15.8539 12.3183 15.6912 12.3734 15.5237 12.374C15.3563 12.3745 15.1932 12.3206 15.0591 12.2202L12.0562 9.96878C11.8432 9.80882 11.5993 9.69475 11.34 9.63378C11.0807 9.57281 10.8116 9.56627 10.5496 9.61455C10.2877 9.66284 10.0386 9.76492 9.81803 9.91433C9.59751 10.0637 9.41036 10.2573 9.26839 10.4827Z" fill="#586E8A"/>
</svg>
</div>
          </div>

          <div onClick={() => shareContent('whatsapp')} className="w-[40px] h-[40px]  rounded-full flex justify-center items-center cursor-pointer">
          <div data-svg-wrapper>
<svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.650391 26.0562L2.45644 19.4583C1.34198 17.527 0.756377 15.3377 0.757448 13.0927C0.760659 6.07404 6.47215 0.362549 13.4897 0.362549C16.8952 0.363619 20.092 1.69006 22.4965 4.0967C24.8999 6.50334 26.2231 9.70221 26.222 13.1045C26.2188 20.1242 20.5073 25.8357 13.4897 25.8357C11.3593 25.8346 9.25992 25.3004 7.40034 24.2855L0.650391 26.0562ZM7.71294 21.9806C9.50722 23.0458 11.2201 23.6839 13.4855 23.6849C19.3179 23.6849 24.0691 18.938 24.0723 13.1023C24.0745 7.25488 19.3458 2.5144 13.494 2.51225C7.65727 2.51225 2.90929 7.25916 2.90715 13.0938C2.90608 15.4758 3.60409 17.2594 4.77637 19.1254L3.70687 23.0308L7.71294 21.9806ZM19.9035 16.131C19.8243 15.9982 19.6123 15.919 19.2933 15.7595C18.9753 15.6 17.4112 14.8302 17.119 14.7243C16.8278 14.6183 16.6158 14.5647 16.4028 14.8838C16.1908 15.2017 15.5806 15.919 15.3954 16.131C15.2102 16.343 15.0239 16.3697 14.7059 16.2102C14.388 16.0507 13.3623 15.7156 12.1472 14.6311C11.2019 13.7875 10.5628 12.7458 10.3776 12.4268C10.1924 12.1088 10.3583 11.9365 10.5168 11.778C10.6602 11.6357 10.8347 11.4066 10.9942 11.2203C11.1559 11.0361 11.2084 10.9034 11.3154 10.6903C11.4214 10.4784 11.3689 10.2921 11.2887 10.1326C11.2084 9.97413 10.5724 8.40789 10.308 7.7709C10.0489 7.15104 9.78664 7.23454 9.5918 7.22491L8.98157 7.2142C8.7696 7.2142 8.42487 7.29342 8.13368 7.61245C7.84248 7.93148 7.02029 8.70015 7.02029 10.2664C7.02029 11.8326 8.16044 13.3454 8.31889 13.5573C8.4784 13.7693 10.5617 16.9832 13.7531 18.361C14.5121 18.6886 15.1052 18.8845 15.5667 19.0312C16.3289 19.2731 17.0226 19.2388 17.5708 19.1575C18.1821 19.0665 19.4528 18.3877 19.7183 17.6448C19.9838 16.9007 19.9838 16.2637 19.9035 16.131Z" fill="#586E8A"/>
</svg>
</div>
          </div>

          <div onClick={() => shareContent('email')} className="w-[40px] h-[40px]  rounded-full flex justify-center items-center cursor-pointer">
          <div data-svg-wrapper>
<svg width="32" height="29" viewBox="0 0 32 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.4256 13.2898L3.1223 5.42264V21.1863C3.1223 21.3244 3.16665 21.4378 3.25533 21.5265C3.34402 21.6152 3.45744 21.6596 3.5956 21.6596H17.348V23.9664H3.5956C2.81869 23.9664 2.16111 23.6973 1.62284 23.159C1.08456 22.6208 0.81543 21.9632 0.81543 21.1863V3.67787C0.81543 2.90097 1.08456 2.24338 1.62284 1.70511C2.16111 1.16684 2.81869 0.897705 3.5956 0.897705H27.2557C28.0326 0.897705 28.6901 1.16684 29.2284 1.70511C29.7667 2.24338 30.0358 2.90097 30.0358 3.67787V14.3545H27.7289V5.42264L15.4256 13.2898ZM15.4256 10.8942L27.4925 3.20458H3.35876L15.4256 10.8942ZM25.8954 28.4175L24.2894 26.8116L27.0815 23.9664H20.1282V21.6596H27.0961L24.2509 18.8144L25.8954 17.2084L31.4999 22.813L25.8954 28.4175ZM3.1223 5.42264V22.946V14.3545V14.5436V3.20458V5.42264Z" fill="#586E8A"/>
</svg>
</div>
          </div>
        </div>
      </div>

      <div className=" mt-10 m-auto text-center text-black sm:text-4xl text-xl font-normal leading-relaxed">Related Blogs</div>
      <div className="flex flex-col justify-evenly items-center md:flex-row mx-auto mt-10">
        {related.map((rel) => (
          <div
            key={rel.id}
            onClick={() => router.push(`/article/${rel.slug}`)}
            className="bg-white cursor-pointer transition-all mx-5 mt-5 duration-300 flex flex-col justify-start hover:scale-105 border-2 rounded-lg p-4 max-w-[392px] h-[390px]"
          >
            <Image
              width={392}
              height={160}
              src={rel.image}
              alt={rel.title}
              className="w-full object-cover rounded-lg max-w-[360px] h-60"
            />
            <span className="mt-4 text-[#7000ff] text-sm font-normal ">{rel.category}</span>
            <h2 className="text-lg font-semibold mt-1">{rel.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
