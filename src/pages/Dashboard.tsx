import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import OfferCard from "@/components/OfferCard";
import { LogOut } from "lucide-react";

const Dashboard = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        navigate("/login");
      } else {
        setLoading(false);
      }
    };
    checkAuth();
  }, [navigate]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    toast.success("Logged out successfully");
    navigate("/login");
  };

  const offers = [
    {
      title: "Dialog Router 724",
      beforePrice: "5500/= (1 year)",
      nowPrice: "4000/= (2 years)",
      description: [
        "2 Year Unlimited Data",
        "Gaming working",
        "For High end users",
        "Monthly 8TB - 16TB",
        "6 devices can connect",
        "One time payment",
        "Special config for gaming",
        "Low latency",
        "Torrent support",
        "2 Backup configs"
      ],
      configsAvailable: "7 configs available"
    },
    {
      title: "Dialog 348 Mobile",
      beforePrice: "5500/= (1 year)",
      nowPrice: "4000/= (2 years)",
      description: [
        "Package data limit 20GB",
        "No speed cap",
        "2 Year Unlimited Data",
        "Gaming working",
        "For High end users",
        "Monthly 8TB - 16TB",
        "6 devices can connect",
        "One time payment",
        "Special config for gaming",
        "Low latency",
        "Torrent support",
        "2 Backup configs"
      ],
      configsAvailable: "1 config available"
    },
    {
      title: "Mobitel 222 Mobile",
      beforePrice: "5500/= (1 year)",
      nowPrice: "4000/= (2 years)",
      description: [
        "Package data limit 25GB",
        "No speed cap",
        "2 Year Unlimited Data",
        "Gaming working",
        "For High end users",
        "Monthly 8TB - 16TB",
        "6 devices can connect",
        "One time payment",
        "Special config for gaming",
        "Low latency",
        "Torrent support",
        "2 Backup configs"
      ],
      configsAvailable: "6 configs available"
    },
    {
      title: "Airtel 389",
      beforePrice: "5500/= (1 year)",
      nowPrice: "4000/= (2 years)",
      description: [
        "Package data unlimited (some sim)",
        "No speed cap",
        "2 Year Unlimited Data",
        "Gaming working",
        "For High end users",
        "Monthly 8TB - 16TB",
        "6 devices can connect",
        "One time payment",
        "Special config for gaming",
        "Low latency",
        "Torrent support",
        "2 Backup configs"
      ],
      configsAvailable: "3 configs available"
    },
    {
      title: "Hutch Zoom",
      beforePrice: "5500/= (1 year)",
      nowPrice: "4000/= (2 years)",
      description: [
        "Package data limit",
        "No speed cap",
        "2 Year Unlimited Data",
        "Gaming working",
        "For High end users",
        "Monthly 8TB - 16TB",
        "6 devices can connect",
        "One time payment",
        "Special config for gaming",
        "Low latency",
        "Torrent support",
        "2 Backup configs"
      ],
      configsAvailable: "2 configs available"
    },
    {
      title: "SLT Zoom",
      beforePrice: "5500/= (1 year)",
      nowPrice: "4000/= (2 years)",
      description: [
        "Package data limit",
        "No speed cap",
        "2 Year Unlimited Data",
        "Gaming working",
        "For High end users",
        "Monthly 8TB - 16TB",
        "6 devices can connect",
        "One time payment",
        "Special config for gaming",
        "Low latency",
        "Torrent support",
        "2 Backup configs"
      ],
      configsAvailable: "4 configs available"
    },
    {
      title: "SLT Netflix",
      beforePrice: "5500/= (1 year)",
      nowPrice: "4000/= (2 years)",
      description: [
        "Package data unlimited",
        "No speed cap",
        "2 Year Unlimited Data",
        "Gaming working",
        "For High end users",
        "Monthly 8TB - 16TB",
        "6 devices can connect",
        "One time payment",
        "Special config for gaming",
        "Low latency",
        "Torrent support",
        "2 Backup configs"
      ],
      configsAvailable: "3 configs available"
    },
    {
      title: "Airtel 135",
      beforePrice: "5500/= (1 year)",
      nowPrice: "4000/= (2 years)",
      description: [
        "Package data limit",
        "No speed cap",
        "2 Year Unlimited Data",
        "Gaming working",
        "For High end users",
        "Monthly 8TB - 16TB",
        "6 devices can connect",
        "One time payment",
        "Special config for gaming",
        "Low latency",
        "Torrent support",
        "2 Backup configs"
      ],
      configsAvailable: "1 config available"
    },
    {
      title: "Airtel Zoom",
      beforePrice: "5500/= (1 year)",
      nowPrice: "4000/= (2 years)",
      description: [
        "Package data limit 30GB",
        "No speed cap",
        "2 Year Unlimited Data",
        "Gaming working",
        "For High end users",
        "Monthly 8TB - 16TB",
        "6 devices can connect",
        "One time payment",
        "Special config for gaming",
        "Low latency",
        "Torrent support",
        "2 Backup configs"
      ],
      configsAvailable: "2 configs available"
    },
    {
      title: "Hutch Zero",
      beforePrice: "6000/= (1 year)",
      nowPrice: "4000/= (2 years)",
      description: [
        "No need package",
        "No speed cap",
        "2 Year Unlimited Data",
        "Gaming working",
        "For High end users",
        "Monthly 8TB - 16TB",
        "6 devices can connect",
        "One time payment",
        "Special config for gaming",
        "Low latency",
        "Torrent support",
        "2 Backup configs"
      ],
      configsAvailable: "12 configs available"
    }
  ];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary to-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-soft">
        <div className="container flex h-14 sm:h-16 items-center justify-between px-4 sm:px-6">
          <div className="flex-1 min-w-0">
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent truncate">
              DragonForce
            </h1>
            <p className="text-[10px] sm:text-xs text-muted-foreground hidden xs:block">Powering Unlimited Internet Deals</p>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={handleLogout}
            className="gap-1 sm:gap-2 ml-2 flex-shrink-0 text-xs sm:text-sm h-8 sm:h-9 px-2 sm:px-3"
          >
            <LogOut className="h-3 w-3 sm:h-4 sm:w-4" />
            <span className="hidden xs:inline">Logout</span>
            <span className="xs:hidden">Out</span>
          </Button>
        </div>
      </header>

      <main className="container px-4 sm:px-6 py-6 sm:py-8">
        <div className="mb-6 sm:mb-8 fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">Exclusive Internet Offers</h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            Choose from our premium internet packages with gaming support and unlimited data
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-6 fade-in">
          {offers.map((offer, index) => (
            <div key={index} style={{ animationDelay: `${index * 0.1}s` }} className="fade-in">
              <OfferCard {...offer} />
            </div>
          ))}
        </div>
      </main>

      <footer className="border-t bg-background/95 backdrop-blur mt-12 sm:mt-16">
        <div className="container px-4 sm:px-6 py-6 sm:py-8 text-center">
          <p className="text-xs sm:text-sm text-muted-foreground">
            © 2024 DragonForce. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;