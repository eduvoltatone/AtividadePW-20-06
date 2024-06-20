import Header from '../components/Header/Header';
import CardSection from '../components/CardSection/CardSection';
import Link from 'next/link';

export default function Home() {
    return (
        <div>
            <Header titulo="Squirtle" />
            <CardSection titulo="Descrição">
                <p>Squirtle é uma pequena tartaruga azul com uma cauda ondulada em forma de concha.</p>
            </CardSection>
            <CardSection titulo="Habilidades">
                <p>Squirtle tem a habilidade de disparar água de sua boca com alta precisão.</p>
            </CardSection>
            <CardSection titulo="Evoluções">
                <Link href={{ pathname: '/evolucoes', query: { evolucao: 'wartortle' } }} legacyBehavior>
                    <a>
                        <img src="/images/wartortle.png" alt="Wartortle" />
                    </a>
                </Link>
                <Link href={{ pathname: '/evolucoes', query: { evolucao: 'blastoise' } }} legacyBehavior>
                    <a>
                        <img src="/images/blastoise.png" alt="Blastoise" />
                    </a>
                </Link>
            </CardSection>
        </div>
    );
}
