import '../styles/globals.css';
import { InterFont } from '@/styles/fonts';
import { ThemeProvider } from '@/styles/ThemeProvider';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import NextTopLoader from 'nextjs-toploader';
import config from '@/lib/config/site';
import UserProfileProvider from '@/context/UserProfileContext';

const RootLayout = ({ children }) => {
  return (
    <html suppressHydrationWarning lang="en" className={`${InterFont.variable}`}>
      <body>
        <UserProfileProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <NextTopLoader color={config.loading_bar_color} />
            {children}
          </ThemeProvider>
          <ToastContainer position="top-right" />
        </UserProfileProvider>
      </body>
    </html>
  );
};

export default RootLayout;
