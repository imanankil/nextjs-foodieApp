import Link from "next/link"
import logoIMg from '@/assets/logo.png';

export default function MainHeader () {
    return <headr>
    <Link href="/">
        <img src={logoIMg.src} alt="A plate with a food on it" />
        NextLevel Food
    </Link>

    <nav>
        <ul>
            <li>
                <Link href="/meals">Browse Meals</Link>
            </li>
            <li>
                <Link href="/community">Foodies Community</Link>
            </li>
        </ul>
    </nav>
    </headr>
}