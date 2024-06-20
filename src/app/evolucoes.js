import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import CardSection from '../components/CardSection/CardSection';

export default function Evolucoes() {
    const router = useRouter();
    const { evolucao } = router.query;

    const [pokemonData, setPokemonData] = useState(null);

    useEffect(() => {
        if (evolucao) {
            fetch(`https://pokeapi.co/api/v2/pokemon/${evolucao}`)
                .then(response => response.json())
                .then(data => setPokemonData(data));
        }
    }, [evolucao]);

    return (
        <div>
            {pokemonData && (
                <CardSection titulo={evolucao}>
                    <img src={pokemonData.sprites.front_default} alt={evolucao} />
                </CardSection>
            )}
        </div>
    );
}
