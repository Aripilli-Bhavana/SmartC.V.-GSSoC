import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import Features from '../pages/Features';
import HowItWorks from '../pages/HowItWorks';
import Docs from '../pages/Docs';
import ResumeDash from '../pages/Resume/ResumeDash';


export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { path: '', element: <Home />,},
            { path: 'features', element: <Features />,},
            { path: 'how-it-works', element: <HowItWorks />,},
            { path: 'docs', element: <Docs />,},
            { path: 'createresumesection' , element: <ResumeDash /> },
        ],
    },
]);