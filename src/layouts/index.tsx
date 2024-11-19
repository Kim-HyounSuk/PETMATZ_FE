import { Outlet } from 'react-router-dom';
import Header from './Header';
import BottomNav from './BottomNav';

interface RootLayoutProps {
    layout: boolean;
}

export default function RootLayout({ layout }: RootLayoutProps) {
    return (
        <div className="min-h-screen relative max-w-[768px] bg-white text-secondary mx-auto flex flex-col justify-center">
            {layout && <Header />}
            <main className="flex-1">
                <Outlet />
            </main>
            {layout && <BottomNav />}
        </div>
    );
}
