import "@/App.css";
import { useEffect, useState } from "react";
import { ReactLenis } from "lenis/react";
import { Toaster } from "sonner";
import Landing from "@/pages/Landing";
import Auth from "@/pages/Auth";
import { NoiseOverlay } from "@/components/NoiseOverlay";

function App() {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const onRouteChange = () => setPath(window.location.pathname + window.location.hash);
    onRouteChange();
    window.addEventListener("hashchange", onRouteChange);
    window.addEventListener("popstate", onRouteChange);
    return () => {
      window.removeEventListener("hashchange", onRouteChange);
      window.removeEventListener("popstate", onRouteChange);
    };
  }, []);

  return (
    <ReactLenis root options={{ lerp: 0.08, smoothWheel: true }}>
      <div className="App min-h-screen bg-background text-foreground">
        <NoiseOverlay />
        {path === "/auth" || path.endsWith("#auth") ? <Auth /> : <Landing />}
        <Toaster
          theme="dark"
          position="bottom-center"
          toastOptions={{
            style: {
              background: "hsl(0 0% 8%)",
              border: "1px solid hsl(0 0% 15%)",
              color: "hsl(60 10% 96%)",
              fontFamily: "JetBrains Mono, monospace",
            },
          }}
        />
      </div>
    </ReactLenis>
  );
}

export default App;
