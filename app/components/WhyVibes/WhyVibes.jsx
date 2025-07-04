import Card from './Card';
import TrustedBy from './TrustedBy';
import Button from '../Button';
const cards = [
    {
      icon: "./assets/marketing.svg",
      title: "Influencer \nMarketing Strategy",
      description: "Expertly crafted strategies that \nalign influencers with your \nbrand goals, ensuring impactful \nand measurable campaigns."
    },
    {
      icon: "./assets/ai_driven.svg",
      title: "AI driven Influencer \nMatchmaking",
      description: "Leveraging AI to identify the \nperfect influencers for your brand, \nensuring precision, relevance, \nand optimal results."
    },
    {
      icon: "./assets/creative.svg",
      title: "Innovative and \nCreative Concepts",
      description: "Crafting innovative strategies, \nfresh imaginative ideas, setting \nyour campaigns apart and \ncaptivating your audience."
    },
    {
      icon: "./assets/content.svg",
      title: "Content Creation \nSupport",
      description: "Assisting influencers in creating \nhigh-quality, engaging content \nthat resonates with your target \naudience."
    },
    {
      icon: "./assets/full-service.svg",
      title: "Full-Service \nCampaigns",
      description: "Comprehensive management \nof your campaign from start to \nfinish, ensuring seamless \nexecution."
    },
    {
      icon: "./assets/analytics.svg",
      title: "Analytics \nand Reporting",
      description: "Providing in-depth analysis \nand transparent reporting to track \nsuccess and optimize future \ncampaigns."
    }
  ];
function WhyVibes() {
  return (
    <div id="why-vibes" className='-mt-16 sm:mt-[160px] '>
      <div className='relative w-[80%] m-auto max-w-[1400px] z-20'>
      <p className=" text-center text-[28px] sm:text-5xl font-semibold leading-[59px]">Why Vibes Network?</p>
      <p className="hidden sm:block text-center mt-[20px] text-xl font-normal leading-7">We provide custom influencer marketing strategies and exclusive influencer-campaign <br></br> matchmaking technology, high-quality content creation, 360° Influencer Campaign <br></br>management, in-depth analytics and transparent reporting.</p>

    <div className="grid max-w-[1000px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 mx-auto">
      {cards.map((card, index) => (
        <Card key={index} icon={card.icon} title={card.title} description={card.description} />
      ))}
    </div>
      </div>
      <div className="w-fit m-auto mt-20">


      <Button text="Schedule Consultation" />
      </div>

      <TrustedBy />
    </div>
  )
}

export default WhyVibes
