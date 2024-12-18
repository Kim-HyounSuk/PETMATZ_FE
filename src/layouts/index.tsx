import { Outlet } from 'react-router-dom';
import Header from './Header';
import BottomNav from './BottomNav';

interface RootLayoutProps {
    layout: boolean;
}

export default function RootLayout({ layout }: RootLayoutProps) {
    return (
        <div className="h-screen relative max-w-[768px] min-w-[360px] bg-bgColor mx-auto flex flex-col justify-center shadow-[0_7px_29px_0px_rgba(100,100,111,0.5)]">
            {layout && <Header />}
            <div className="flex flex-col h-full overflow-hidden">
                <Outlet />
            </div>
            {layout && <BottomNav />}
        </div>
    );
}
