import { useState } from 'react'
import './App.css'
import Header from './Component/Header/Header'
import Footer from './Component/Footer/Footer'
import HeroBanner from './Component/HeroBanner/HeroBanner'
import Finance from './Component/Finance/Finance'
import Portfolios from './Component/Portfolio/Portfolio'
import Customers from './Component/Customer/Customer'
import GetQuote from './Component/GetQuote/GetQuote'
import Testimonials from './Component/Testimonials/Testimonials'
import Disclosure from './Component/Disclosure/Disclosure'
function App() {
  const [count, setCount] = useState(0)

  return (
		<>
			<Header />
			<HeroBanner
				backgroundImage={"/images/banner4.jpg"}
				heading={"Apply Your Loan Now"}
				subtext={
					"Earn passive income from peer-to-peer lending to protect against market"
				}
				buttonText={"Apply Now"}
				counters={[
					{
						prefix: "$",
						value: 50,
						suffix: "M+",
						title: "Total Loans Funded",
						desc: "Platform volume",
					},
					{
						value: 1200,
						suffix: "+",
						title: "Active Clients",
						desc: "Worldwide users",
					},
					{
						value: 85,
						suffix: "%",
						title: "Growth Rate",
						desc: "Year over year",
					},
					{ value: 15, title: "Countries", desc: "Global presence" },
				]}
			/>
			<Finance
				eyebrow="|| ABOUT COMPANY ||"
				title="Educational loans to fulfill your dreams"
				description="Since 1987, we’ve been helping students achieve their academic goals with trusted and affordable loan solutions.Our flexible plans and dedicated support make financing education simple, reliable, and stress-free."
				points={["No hidden fees", "Fast approval", "Transparent pricing"]}
				buttonText="Discover More"
				onButtonClick={() => alert("Discover More clicked!")}
				image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=example"
				imageAlt="Finance team working together"
				reverse={false} // change to true if you want the image on the left
			/>

			<Portfolios
				heading="Personalized, automated portfolios."
				subheading={[
					"Trusted finance services",
					"Built for individuals and businesses",
				]}
				cards={[
					{
						title: "Get a portfolio recommendation",
						text: "Complete your profile and receive investment recommendations based on your goals and risk tolerance.",
						linkText: "Learn more",
						linkHref: "/safe",
					},
					{
						title: "Invest and start earning",
						text: "Access loans and investment opportunities from 12+ verified pools with transparent risk profiles.",
						linkText: "Learn more",
						linkHref: "/fast",
					},
					{
						title: "Receive monthly income or reinvest",
						text: "Get monthly income payments or automatically reinvest your earnings to compound your returns.",
						linkText: "Learn more",
						linkHref: "/transparent",
					},
				]}
			/>
			<Finance
				eyebrow="|| OUR BENEFITS ||"
				title="Why you should choose our company"
				description="We understand the financial challenges students face while pursuing their dreams.Our flexible repayment options and low-interest plans make education more accessible.With quick approvals and transparent terms, you can focus on your future not your finances.We’re committed to supporting your academic journey every step of the way."
				points={["Lowest bank fees", "Up to 20.000$ limit", "Easy in 3 steps"]}
				buttonText="Get Started"
				onButtonClick={() => alert("Discover More clicked!")}
				image="/images/benefit-1-1.png"
				imageAlt="Finance team working together"
				reverse={true} // change to true if you want the image on the left
			/>
			<Customers
				backgroundImage="/images/banner4.jpg"
				heading="Hundreds of Students Trust our Company"
				points={[
					"SEC Registered",
					"$50M+ Aggregate AUM",
					"<0.5% Low Loss Rates",
					"5+ Years Track Record",
					"12 Verified Funds",
					"Easy to Use",
				]}
			/>
			<Testimonials />
			<Disclosure
				eyebrow="|| Important Information ||"
				title="Risk & Regulatory Disclosures"
				description="Please read the following disclosures carefully before participating in lending or investment activities on our platform."
				items={[
					`Lending Risks: Peer-to-peer lending involves risk of loss. All loans are subject to credit approval. Interest rates are variable and subject to change. Past performance does not guarantee future results.`,
					`Investment Risks: Investing in loans may result in loss of principal. Diversification does not eliminate the risk of experiencing investment losses. Always consider your investment objectives, risk tolerance, and financial situation before investing.`,
					`Regulatory Information: Gurley Club is operated as a licensed lending institution. We comply with all applicable federal and state lending regulations.`,
				]}
			/>
			<GetQuote
				image="/images/cta-2-1-bg.png"
				tagline="SIMPLE / TRANSPARENT / SECURE"
				heading="Get quick business loans"
				buttonText="Apply For Loan"
				onButtonClick={() => alert("Button Clicked!")}
			/>
			<Footer />
		</>
	);
}

export default App
