import ServicesSection from '@/components/home/ServicesSection';
import PortfolioSection from '@/components/home/PortfolioSection';
import { fetchHome } from '@/lib/homeApi';
import { fetchPortfolioList } from '@/lib/portfolioApi';
import { fetchServiceList } from '@/lib/serviceApi';

export default async function HomeDataSections() {
    const home = await fetchHome();

    const portfolios = home ? home.portfolios : await fetchPortfolioList();

    const services = home ? home.services : await fetchServiceList({ cache: 'no-store' });

    return (
        <>
            <ServicesSection services={services} />
            <PortfolioSection portfolios={portfolios} />
        </>
    );
}
