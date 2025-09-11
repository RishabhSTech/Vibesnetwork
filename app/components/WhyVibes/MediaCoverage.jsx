"use client";
import Image from 'next/image';
import { useRouter } from 'next/navigation';

function MediaCoverage() {
  const router = useRouter();

  return (
    <div className="mt-20 sm:mt-32 mb-10 w-[80%] max-w-[900px] m-auto">
      {/* Desktop/Tablet */}
      <div className="hidden sm:block">
        <p className="text-[#554469] mx-auto sm:mx-0 mt-10 md:mr-[-10px] text-xl text-center font-normal leading-normal">Media Coverage</p>
        <div className='flex mb-10 items-center scale-90 sm:scale-100 mt-4 flex-row justify-between'>
          <Image onClick={()=>{ router.push('https://www.educationtimes.com/article/editor-s-pick/99735357/the-vibes-academy-voices-inspiring-a-better-society') }} src="/assets/education.svg" width={90} height={50} alt="education" className='mr-5 hover:cursor-pointer'/>
          <Image onClick={()=>{ router.push('https://www.timesnownews.com/business-economy/industry/indias-vibes-academy-embarks-on-ambitious-skill-revolution-to-shape-formidable-workforce-article-110369285') }} src="/assets/times.svg" width={90} height={50} alt="times" className='mr-5 hover:cursor-pointer'/>
          <Image onClick={()=>{ router.push('https://www.bhaskarhindi.com/education/vibes-academy-pioneering-positive-change-in-the-field-of-social-messaging-and-skill-training-1032784') }} src="/assets/dainik.svg" width={90} height={50} alt="dainik" className='mr-5 hover:cursor-pointer'/>
          <Image onClick={()=>{ router.push('https://www.abplive.com/brand-wire/the-best-online-platform-for-developing-and-training-influencers-who-set-social-media-trends-2695545') }} src="/assets/abp.svg" width={90} height={50} alt="abp" className='mr-5 hover:cursor-pointer'/>
          <Image onClick={()=>{ router.push('https://english.newsnationtv.com/brand-stories/brand-stories-english/introducing-the-vibes-academy-pioneering-positive-change-in-social-messaging-and-skill-training-259877.html') }} src="/assets/nation.svg" width={90} height={50} alt="nation" className='hover:cursor-pointer'/>
        </div>
      </div>

      {/* Mobile */}
      <div className="sm:hidden">
        <p className="text-[#554469] mx-auto mt-10 text-center text-xl font-normal leading-normal">Media Coverage</p>
        <div className='flex mb-10 mx-auto sm:mx-0 -ml-5 sm:ml-0 items-center scale-90 sm:scale-100 mt-4 flex-row max-w-[900px] justify-start sm:justify-between flex-wrap gap-x-5 gap-y-3 px-0'>
          <Image onClick={()=>{ router.push('https://www.educationtimes.com/article/editor-s-pick/99735357/the-vibes-academy-voices-inspiring-a-better-society') }} src="/assets/education.svg" width={90} height={50} alt="education" className='mr-5 hover:cursor-pointer'/>
          <Image onClick={()=>{ router.push('https://www.timesnownews.com/business-economy/industry/indias-vibes-academy-embarks-on-ambitious-skill-revolution-to-shape-formidable-workforce-article-110369285') }} src="/assets/times.svg" width={90} height={50} alt="times" className='mr-5 hover:cursor-pointer'/>
          <Image onClick={()=>{ router.push('https://www.bhaskarhindi.com/education/vibes-academy-pioneering-positive-change-in-the-field-of-social-messaging-and-skill-training-1032784') }} src="/assets/dainik.svg" width={90} height={50} alt="dainik" className='mr-5 hover:cursor-pointer'/>
          <Image onClick={()=>{ router.push('https://www.abplive.com/brand-wire/the-best-online-platform-for-developing-and-training-influencers-who-set-social-media-trends-2695545') }} src="/assets/abp.svg" width={90} height={50} alt="abp" className='mr-5 hover:cursor-pointer'/>
          <Image onClick={()=>{ router.push('https://english.newsnationtv.com/brand-stories/brand-stories-english/introducing-the-vibes-academy-pioneering-positive-change-in-social-messaging-and-skill-training-259877.html') }} src="/assets/nation.svg" width={90} height={50} alt="nation" className='hover:cursor-pointer'/>
        </div>
      </div>
    </div>
  );
}

export default MediaCoverage;