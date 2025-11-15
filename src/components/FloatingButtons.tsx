import { Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function FloatingButtons() {
  const phoneNumber = '+919415981641';
  const whatsappNumber = '919415981641';

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=Hello, I would like to inquire about admission at Yoga Convent School.`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <Button
  variant="ghost"
  size="icon"
  onClick={handleWhatsApp}
  className="h-14 w-14 rounded-full shadow-lg bg-[#25D366] hover:bg-[#20BA5A] text-white p-0 animate-bounce"
  title="Chat on WhatsApp"
>
  <MessageCircle className="h-7 w-7 text-white" />
</Button>

      <Button
  variant="ghost"
  size="icon"
  onClick={handleCall}
  className="h-14 w-14 rounded-full shadow-lg bg-blue-500 hover:bg-blue-600 text-white p-0"
  title="Call Us"
>
  <Phone className="h-7 w-7 text-white" />
</Button>

    </div>
  );
}
