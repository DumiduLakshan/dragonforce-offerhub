import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface OfferCardProps {
  title: string;
  beforePrice: string;
  nowPrice: string;
  description: string[];
  configsAvailable: string;
}

const OfferCard = ({ title, beforePrice, nowPrice, description, configsAvailable }: OfferCardProps) => {
  const handleGetOffer = () => {
    const message = `I'm interested in the ${title} plan from DragonForce`;
    const whatsappUrl = `https://wa.me/94751267252?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Card className="hover-lift shadow-medium bg-gradient-card border-2 hover:border-primary/50 transition-all h-full flex flex-col">
      <CardHeader className="pb-3 sm:pb-4 px-4 sm:px-6 pt-4 sm:pt-6">
        <div className="flex justify-between items-start gap-2 mb-2">
          <CardTitle className="text-base sm:text-lg md:text-xl font-bold text-foreground leading-tight flex-1 min-w-0">
            {title}
          </CardTitle>
          <Badge variant="secondary" className="bg-accent text-accent-foreground text-[10px] sm:text-xs whitespace-nowrap flex-shrink-0">
            {configsAvailable}
          </Badge>
        </div>
        <CardDescription className="space-y-1">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-muted-foreground line-through text-xs sm:text-sm">{beforePrice}</span>
            <span className="text-xl sm:text-2xl font-bold text-primary">{nowPrice}</span>
          </div>
        </CardDescription>
      </CardHeader>

      <CardContent className="flex-grow px-4 sm:px-6 pb-3 sm:pb-4">
        <ul className="space-y-1.5 sm:space-y-2">
          {description.map((item, index) => (
            <li key={index} className="flex items-start gap-2 text-xs sm:text-sm">
              <span className="text-primary mt-0.5 flex-shrink-0">✓</span>
              <span className="text-foreground/80 leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </CardContent>

      <CardFooter className="px-4 sm:px-6 pb-4 sm:pb-6 pt-2 sm:pt-3">
        <Button
          onClick={handleGetOffer}
          className="w-full bg-gradient-primary hover:opacity-90 transition-all h-10 sm:h-11 text-sm sm:text-base font-medium touch-manipulation"
        >
          Get Offer Now
        </Button>
      </CardFooter>
    </Card>
  );
};

export default OfferCard;