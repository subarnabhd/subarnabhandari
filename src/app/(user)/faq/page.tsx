import React from "react";
import Faq from "@/components/Faq";

const page = () => {
  return (
    <main className="bg-white">
      <div className="text-white bg-primary-300 text-center p-20 flex flex-col gap-5">
        <h1 className="font-bold text-5xl">FAQs</h1>
        <p className="color-neutral-3">
          In our FAQ section, you can find all the information you're looking
          for. We're happy to help.
        </p>
      </div>
      <div className="container m-auto gap-5 flex flex-col py-20 color-neutral-8">
        <div className="border p-5 rounded-lg m-2">
        <h2 className="text-3xl font-bold color-primary-500 p-2">General</h2>
        <Faq
          acc={[
            { id: 1, title: "What is Vhandar?", description: "Vhandar is leading the charge in transforming Nepal’s vast, unorganised grocery landscape through cutting-edge technology and innovation. Vhandar is Nepal’s largest and most convenient hyper-local delivery company, which enables you to order grocery, fruits & vegetables, and other daily essential products, directly via your mobile or web browser. To know the reason why we changed our brand name from Grofers to Vhandar, read this blog post. " },
            { id: 2, title: "What kind of products does Vhandar sell?", description: "You can buy 7000+ products on Vhandar – everything from groceries to fresh fruits & vegetables, cakes and bakery items, to meats & seafood, cosmetics, mobiles & accessories, electronics (including Apple products), baby care products and much more. We get it delivered at your doorstep in the fastest and the safest way possible." },
            { id: 3, title: "What cities and locations does Vhandar operate in?", description: "Vhandar currently operates in Ahmedabad, Bengaluru, Chandigarh, Chennai, Delhi, Faridabad, Ghaziabad, Gurugram,  Hyderabad, Jaipur, Jalandhar, Kanpur, Kolkata, Lucknow, Ludhiana, Meerut, Mohali, Mumbai, Noida, Panchkula, PuneVadodara and Zirakpur." },
          ]}
        ></Faq>
        </div>
        <div className="border p-5 rounded-lg m-2">

        <h2 className="text-3xl font-bold color-primary-500 p-2">Miscellaneous</h2>
        <Faq
          acc={[
            { id: 1, title: "Does Vhandar deliver cigarettes?", description: "Yes, Vhandar delivers cigarettes in select areas in all the 23 cities we are currently operating in. We are fully cognisant of the harmful nature of smoking and hence, expect our customers to be 18 or above (we are bound to report to the authorities in case of transgression). We urge our customers to ensure that their location is away from educational institutes. We strongly advise against purchasing cigarettes on behalf of minors." },
            { id: 2, title: "Does Vhandar deliver sanitary pads?", description: "Yes, we deliver sanitary pads across 23 cities in Nepal. This includes Ahmedabad, Bengaluru, Chandigarh, Chennai, Delhi, Faridabad, Ghaziabad, Gurugram,  Hyderabad, Jaipur, Jalandhar, Kanpur, Kolkata, Lucknow, Ludhiana, Meerut, Mohali, Mumbai, Noida, Panchkula, PuneVadodara and Zirakpur." },
            { id: 3, title: "Does Vhandar deliver condoms?", description: "Yes, we deliver condoms in all the 23 cities we operate in. Orders come with discreet packaging. Our customers’ privacy is of utmost priority for us and we help them to shop in confidence." },
            { id: 4, title: "Does Vhandar deliver 24 hours/all night?", description: "As of now, this service (delivery between 12 am to 6am) is available in select areas in a few cities. " },
            { id: 5, title: "Does Vhandar deliver ice cream?", description: "Yes, we deliver ice creams and frozen desserts in almost all cities that we operate. We service delicious flavors of ice creams and frozen desserts in small/family packs from Amul, Kwality Walls, NIC and many more." },
            { id: 6, title: "How does Vhandar deliver in 10 minutes?", description: "Our tech enables our partners staff to pick and pack an order within 2 minutes of the customer placing it. Our network of partner stores are so widely spread across cities that we have a store live almost every 2 kilometers. Read this blogpost to know more." },
            { id: 7, title: "Do you take into consideration delivery partners’ safety?", description: "The average delivery speed for our fleet is 18kmph and the average distance covered by our delivery partners is about 2km. This is possible only due to the efficiency of our systems and cluster of stores, coupled with our in-house technology. Our delivery partners connect the dots – between the stores and the customers – in the safest way possible. Read this blogpost to know more." },
          ]}
        ></Faq>
        </div>

        <div className="border p-5 rounded-lg m-2">

        <h2 className="text-3xl font-bold color-primary-500 p-2">Delivery</h2>
        <Faq
          acc={[
            { id: 1, title: "Do you charge for delivery?", description: "Every store has its own delivery charges. The delivery charges are mentioned on the app and web at the checkout page." },
            { id: 2, title: "What are your delivery timings?", description: "The delivery timings are different for different cities and localities. In some locations, our deliveries begin from 6 AM and the last delivery is completed by 11 PM. But we also deliver between 12 AM and 6 AM in in select areas in Bengaluru, Chandigarh, Delhi, Faridabad, Ghaziabad, Gurugram, Jalandhar, Kolkata, Lucknow, Ludhiana, Mumbai, Noida, Panchkula and Zirakpur." },
            { id: 3, title: "Can I change the delivery address of my order?", description: "At this time, we do not offer this option. You can, however, cancel your order and reorder from a different locality" },
            { id: 4, title: "What if I don’t receive my order by the scheduled time?", description: "Over 70% of our deliveries are honoured within the 15 minute timelines. On rare occasions, due to unforeseen circumstances, your order might be delayed. In case of imminent delay, our customer support executive will keep you updated about the delivery time of your order" },
          ]}
        ></Faq>
      </div>

        <div className="border p-5 rounded-lg m-2">


        <h2 className="text-3xl font-bold color-primary-500 p-2">Cancellation and return</h2>
        <Faq
          acc={[
            { id: 1, title: "How can I cancel my order?", description: "Vhandar provides easy and hassle-free cancellation. You can cancel your order via the app or web on the order details page while it is still in the packing stage." },
            { id: 2, title: "What If I want to return something?", description: "The timeline to raise a complaint depends on the category in which the product falls into: Consumable Perishables – meats, seafood, frozen food and FnV, dairy category including milk, eggs and bread, etc. (72 hours); Consumable Non-perishables – groceries, etc. (72 hours); General Merchandise – Electronics, home furnishings, fashion, etc. (24 hours); Freebie missing issue (72 hours); Entire wrong order and MDND (24 hours); boAt products (24 hours); book products (24 hours); and Other issues – insect, fungus or foreign material, expired products, etc. (no restriction)." },
            { id: 3, title: "Can I reschedule my order?", description: "We deliver your order in 10 minutes during all times the store in your area is operational. Hence we request you to order when you are available. It is not possible to reschedule an order." },
            { id: 4, title: "What if I have a complaint regarding my order?", description: "Please reach out to us via the “Customer Support” section on the app/web. Our customer care team is more than happy to help" },
          ]}
        ></Faq>


      </div>
      </div>
    </main>
  );
};

export default page;
