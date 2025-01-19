// data/articlesData.ts
export interface Article {
  id: number;
  title: string;
  date: string;
  time: string;
  text: string;
}

export const articles: Article[] = [
  {
    id: 1,
    title:
      "Deal or Dealbreaker? How to Spot and Protect Yourself Against Black Friday Scams",
    date: "November 19, 2024",
    time: "5 min",
    text: `It’s easy to get caught up in the excitement of Black Friday and Cyber Monday. While there are great deals to be had, there are some discounts that are simply too good to be true. Learn how to spot and protect yourself against cyber scams during this prime holiday shopping season.

Online shopping during Cyber Week (the period that encompasses Black Friday and Cyber Monday), is the busiest shopping time of the year. According to data from Salesforce, Digital sales across Cyber Week reached $298 billion globally in 2023, growing 5% over a year ago. With so many consumers eager for deals – and to check items off their shopping lists – the environment is primed for cybercriminals. In fact, last year, digital holiday shopping fraud in the U.S. was 127% higher compared to the rest of the year.

Here are some tips to protect yourself and your money this holiday shopping season.

Watch out for deals that appear too good to be true
The old adage, “if it sounds too good to be true, it probably is” rings particularly true during Black Friday and Cyber Monday. While there are certainly some great deals to be had online, it’s wise to watch out for discounts that seem too steep – especially if it’s on an item that rarely goes on sale. If you’re seeing discounts of 50% or more, that could be a red flag. Try to do some comparison shopping and take a close look at the website you’re browsing to feel confident that the deal is legitimate.

Look carefully at the websites you’re visiting
With advancements in technology, it has become increasingly easy for scammers to set up websites that look very professional. One common practice is “website spoofing,” which involves a scammer mimicking an existing brand’s site. In other cases, a scammer might set up a fake online store and lure shoppers there via ads on popular sites and social media platforms.

Despite improvements in website design, there are still some tell-tale signs of a fake website that you can watch out for:

Badly designed sites – including colours or language that doesn’t match your expectations for the brand.
Strange payment processes – such as no credit cards accepted, a request for gift card payment or anything else that appears out of the ordinary.
Missing key information or security measures. If a site is missing a return or privacy policy, or doesn’t have contact information, this could be a warning sign. Also, if the URL doesn’t begin with HTTPS or is missing a lock icon beside it, the site is likely fake.
Beware of the fake delivery scam
With the increase in online shopping that takes place during Cyber Week, there is a marked boost in shipping activity too – and this is something else scammers are quick to capitalize on. After all, it’s highly likely that people will have at least one package out for delivery at a given time.

Here’s how a delivery scam works. A scammer posing as a reputable delivery company will send you an email or text notifying you that your package has been delayed or that you owe extra fees for duty or transport. As a result, you need to make a payment before your package can be delivered. You’re then taken to a website where you enter your name, address, and credit card information.

This is an easy scam to fall for, especially if you’re anxious to receive your items before a certain date – you’ll do anything to expedite the delivery of your package! To avoid falling victim, remember to never give your credit card information through a link sent to you by text or email – delivery companies will not ask for payment this way. Instead, track deliveries through the company’s official website using the tracking number provided. 

Avoid impulse giving
Scammers aim to take advantage of this giving spirit and set up fake charities. Spinning heartwarming stories and using current events as context, scammers will create ads, emails, and texts in an attempt to compel consumers to give to people or communities in need. 

If you do wish to give to a cause you care about at this time of year, be sure to do your own research for the best way to do this, versus clicking on a link for an impulse donation. 

How to protect yourself
Shopping during Black Friday and Cyber Monday is all about trying to stretch your hard-earned dollars farther. The last thing you want is for your money to land in the hands of fraudsters. Here are some ways to keep your money safe this holiday season:

Take the “if it sounds too good to be true, it probably is” adage to heart. Beware of discounts that seem too steep.
Don’t open unsolicited texts or emails and don’t click on the links within them.
Never enter your credit card information into a site you reached from a link that was sent to you unexpectedly.
Don’t save your credit card information in your browser or on a shopping site. It’s safest to enter it manually.
Buy from familiar brands and double check the website to be confident you’re on their official page.
If you’re shopping somewhere new, look through the reviews for indications of quality and legitimacy. While reviews can sometimes be fake too, read through them carefully for any strange patterns in ratings or language. Consider doing separate research on the store before you buy.
Searching for great deals and checking items off your holiday shopping list can be a lot of fun. To ensure you get the most bang for your buck this Black Friday and Cyber Monday, consider these tips to keep you and your money safe. `,
  },
  {
    id: 2,
    title:
      "Cybersecurity Scams Get a Boost from Technology: What Small and Medium-sized Enterprises Should Watch Out For",
    date: "October 28, 2024",
    time: "4 min",
    text: `The recent edition of CPABC in Focus, a publication by the Chartered Professional Accountants of British Columbia (CPABC), features a conversation with Michael Argast, co-founder of Kobalt.io. Argast reveals cybersecurity threats affecting SMEs, how technology plays a part in advancing these threats and how to protect against them.

Over the past year, the quality and frequency of cyberattacks on small and medium-sized businesses (SMEs) has increased, thanks in large part to AI and automation. While cybercriminals are building off tried and true tactics, advances in technology are making it easier to find businesses that have vulnerabilities – and to exploit them.

Here are some of the top threats and trends SMEs face in the cybersecurity landscape today.

Social engineering
Social engineering involves manipulating individuals into disclosing private information. While social engineering attacks exploit human behaviour – they play on emotions such as trust and urgency to trick individuals into giving up sensitive information – technology advancements have helped cyber criminals cast a wider net and therefore realize greater success. 

“AI is being used in a variety of different ways now,” explains Argast. “Better written content is an example where it's tailored to the particular target. If you want to mimic a CEO, for example, you can feed in a bunch of the CEO’s previous writing and use AI to draft an email that has the same tone and language.”

Argast further explains that video and voice tools are becoming more prevalent - deepfakes of employees have successfully convinced people to transfer funds. “You can use a four-second sample of somebody’s voice to launch simulated messages and have real-time conversations,” he adds.

Third party risk
Argast explains that most businesses do not store their own data, so it's hard for SMEs to control and manage the optimal level of protection. “Most organizations today don’t run their own technology stacks,” he says. “They don’t host their own data. Instead, they rely on SaaS1 providers and cloud providers of various pedigrees to do that. And third parties are getting compromised all over the place.” 

With an ability to target suppliers with multiple partners, cybercriminals can gain access to thousands of organizations through one successful breach.

Business email compromise 
In a business email compromise scam, criminals send an email message that appears to come from a known source making a legitimate request. Again, AI has given these scams a boost, making them more sophisticated and easier for scammers to carry out.

“Business email and transfer fraud is much more sophisticated than many people realize. It’s not a sketchy email from your CFO requesting a financial transfer to an offshore account,” says Argast. 

“The business email fraud that’s happening today, with these wide-net attacks, enables attackers to live inside your email systems for weeks or months and insert themselves into existing chains of communication, which makes their activities seem highly credible. And they’re going to target the single largest financial transfer you’re going to do in six months.”

How to protect your business
Argast offers the following suggestions for business owners:

Solopreneurs

Use alternate communication channels to verify requests. Argast explains that cybercriminals typically attack just one channel at a time. So, if an email is received requesting a transfer of funds or release of information, it’s best to use a different channel (phone, video, Slack) to reach out to the other party.
Protect devices with encryption, password protection and anti-malware software
Use Multi-Factor Authentication whenever possible
Use a secure cloud service provider that has demonstrated due diligence
SMEs with 5-10 employees

All of the above, plus:
Partner with a cybersecurity firm to perform a risk assessment, which can help prioritize cybersecurity investments
Businesses with 20+ employees 

All of the above, plus:
Implement an industry standard, such as ISO 270012
Ultimately, one of the best ways to protect your business is to seek help from cybersecurity experts. “A lot of small business owners think they have to build this themselves, but there are good service providers out there who focus on delivering cybersecurity services at a fraction of what it would cost to build these kinds of capabilities in-house,” says Argast. “They know best practices, and they can scale their services to the size of the business.” 

Read the full interview with Michael Argast here, to learn more about the top cybersecurity concerns affecting SMEs and how to stay ahead of cybercriminals that are using AI and automation to advance their efforts.`,
  },
  {
    id: 3,
    title: "Everything You Need to Know About Disputing Credit Card Charges",
    date: "December 4, 2024",
    time: "5 min",
    text: `If you’ve found an unfamiliar charge on your credit card, you may be worried about covering the cost. But there are steps you can take to dispute the charge. Here’s a how-to on recognizing fraudulent transactions, disputing them and protecting yourself from fraud in the future.

Despite advancements in credit card production and anti-fraud technology, credit card fraud remains a highly prevalent form of fraud around the world. In Canada, nearly a quarter (24%) of cardholders have experienced credit card fraud, and that number jumps to 60% in the U.S.

How to avoid being a victim of credit card Fraud
Never give out your credit card information in response to an unsolicited call, text or email. 
If you’re interested in giving to a charity, do your own research to find a legitimate organization that matches your charitable values and goals. 
If you’re tracking a delivery, use the company’s official website using the tracking number provided. 
Never leave your card unattended or write down your credit card number or your pin on an unsecured form. If you’re paying at a restaurant, ask to use the credit card terminal so the card doesn’t leave your sight.
If you need to provide your credit card information in a public space, be sure there is no one around to record the card number or your pin.
How to spot fraudulent transactions
The best way to spot a fraudulent credit card transaction is to regularly monitor your account. For instance:

Scan your transactions regularly through online or mobile banking. Signing in to digital banking on a regular basis is the best way to stay on top of your credit card charges and makes it easy to recognize a transaction you didn’t make. This way, you can also dispute charges shortly after they occur, which can make it easier to resolve them.
Set up fraud alerts: If you have an RBC credit card, you can set up fraud alerts, where you’ll automatically receive an SMS text message from 722373 any time a credit card transaction looks out of the ordinary for you. You’ll be able to immediately confirm if you’ve made the transaction or not by responding directly to the message. It’s easy to set up or update your Alert settings through RBC Online Banking1 and the RBC Mobile1 app.
Review your statement each month, whether you receive it electronically or in the mail, and look through all your transactions. You may not notice something is off if you look only at the balance.
The best way to spot a fraudulent credit card transaction is to regularly monitor your account. For instance:

Other reasons you might not recognize a transaction

Unfamiliar credit card transactions aren’t always the result of fraud. Here are other instances where you might not recognize a transaction: 

Unfamiliar merchant name: Sometimes the name a merchant uses for its storefront is different from its registered business name. 
Unfamiliar amount: When a transaction settles, there may be a difference between the amount you were initially charged (the Authorized Transaction) and the final amount you actually paid (the Posted Transaction). 
Unfamiliar date: A delay may occur between the time a transaction is settled and removed from Authorized Transactions, and when it appears in Posted Transactions.
Multiple cardholders or users: If you’re the primary cardholder or a co-applicant, your transaction list will include your purchases, as well as any purchases made by authorized users and other cardholders. 
Expired trials or free memberships: Sometimes free trials automatically transition into paid subscriptions. 
Taking action on a charge you didn’t make
If you notice a transaction you know you didn’t make, here’s what to do next:

Lock your card – If you’re an RBC cardholder, you can easily lock and unlock your card via the RBC Mobile app or RBC Online Banking. It can be temporarily locked and unlocked at any time.

Dispute the fraudulent transaction – If you use RBC Online Banking or the RBC Mobile app, it’s easy to dispute a transaction through either of these digital platforms. On your credit card transaction page, choose the transaction in question and select “I disagree with this charge.” RBC will review the request and get back to you with an update on your claim within three to five business days.

Other ways you’re protected
RBC fraud protection: If you’re concerned about a fraudulent transaction, you can call 1-800-769-2512 and RBC will be happy to help you. Provided you’ve taken reasonable precautions to protect your PIN and your card, you’re covered for any fraudulent charges both online and in-store.

RBC Digital Banking Security Guarantee: You’re fully protected against any eligible digital transactions you didn’t make or approve so long as you fulfill your responsibilities1. Should something covered by the Digital Banking Security Guarantee ever happen, RBC will work to resolve any unauthorized transactions made through the RBC Mobile2 app or RBC Online Banking2.

Zero Liability Protection: Visa and Mastercard offer Zero Liability policies protect you from unauthorized use of your card. 

While credit card fraud remains common today, there are steps you can take to protect yourself and dispute a fraudulent charge. 

It is critical that we all become more Cyber Aware and safeguard our online activities. Visit Be Cyber Aware for more tips.

Stay informed about any new or ongoing scams by checking RBC Current Scam Alerts.`,
  },
];
