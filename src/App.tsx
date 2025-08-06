// import { Toaster } from "@/components/ui/toaster";
// import { Toaster as Sonner } from "@/components/ui/sonner";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Index from "./pages/index";
// import ScrollProgress from "@/components/ScrollProgress";
// import NotFound from "./pages/Notfound";

// const queryClient = new QueryClient();

// const App = () => (
//   <QueryClientProvider client={queryClient}>
//     <TooltipProvider>
//       <Toaster />
//       <Sonner />
//       <BrowserRouter>
//         <SidebarProvider>
          
          
//           <ScrollProgress />
          
//           <div className="min-h-screen flex w-full">
//             <div className="flex-1 flex flex-col">
//               <header className="h-16 flex items-center border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4">
//                 <SidebarTrigger />

//               </header>
//               <main className="flex-1">
//                 <Routes>
//                   <Route path="/" element={<Index />} />
//                   {/* <Route path="/football" element={<Football />} /> */}
//                   <Route path="*" element={<NotFound />} />
//                 </Routes>
//               </main>
//             </div>
//           </div>
//         </SidebarProvider>
//       </BrowserRouter>
//     </TooltipProvider>
//   </QueryClientProvider>
// );
// TESTING BY HUZAIFA
// export default App;
// -----------------------------nEW CODE------------------------------
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/index";
import ScrollProgress from "@/components/ScrollProgress";
import NotFound from "./pages/Notfound";
import ScrollSpyNav from "@/components/ScrollSpyNav"; // 
import ResumeModal from "@/components/Resume";
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SidebarProvider>
          <ScrollProgress />

          <div className="background-stars" />

          <div className="fixed top-4 right-6 z-50">
            <ScrollSpyNav />
          </div>

          <div className="min-h-screen flex w-full relative z-10">
            <div className="flex-1 flex flex-col">
              <header className="h-16 flex items-center border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4">
                <SidebarTrigger />
              </header>

              <main className="flex-1">
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
            </div>
          </div>
        </SidebarProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
