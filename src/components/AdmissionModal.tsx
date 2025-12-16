import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription, DialogClose } from "@/components/ui/dialog";
import { X } from "lucide-react";

import { useLanguage } from "@/contexts/LanguageContext";

interface AdmissionModalProps {
    trigger?: React.ReactNode;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
}

export default function AdmissionModal({ trigger, open, onOpenChange }: AdmissionModalProps) {
    const { t } = useLanguage();

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}
            <DialogContent className="sm:max-w-[420px] p-0 rounded-2xl shadow-2xl border-0 overflow-hidden bg-white [&>button]:hidden">

                <div className="p-6 relative">
                    <DialogClose className="absolute right-0 top-0 p-2 rounded-full hover:bg-gray-100 transition-colors opacity-70 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                        <X className="h-5 w-5 text-gray-500" />
                        <span className="sr-only">Close</span>
                    </DialogClose>

                    <DialogHeader className="mb-4 space-y-2 flex flex-col items-center mt-2">
                        {/* School Logo */}
                        <div className="relative">
                            <div className="absolute inset-0 bg-blue-100 rounded-full blur-xl opacity-50"></div>
                            <img
                                src="https://images.fillout.com/orgid-503168/flowpublicid-5bcjrn1sry/widgetid-default/n95MqABNwZiQVHJwbmNdn5/pasted-image-1763202720427.png"
                                alt="Yoga Convent School Logo"
                                className="h-20 w-20 relative z-10 object-contain drop-shadow-sm transition-transform hover:scale-105 duration-300"
                            />
                        </div>

                        <div className="space-y-1 text-center w-full">
                            <DialogTitle className="text-xl font-bold text-gray-900 tracking-tight">
                                {t('admissionEnquiry')}
                            </DialogTitle>
                            <DialogDescription className="text-center text-xs text-gray-500 font-medium">
                                Connect directly with our admissions office
                            </DialogDescription>
                        </div>
                    </DialogHeader>

                    <div className="flex flex-col gap-3 px-4">
                        <button
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 group active:scale-95"
                            onClick={() => window.location.href = 'tel:+919415981641'}
                        >
                            <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                            </svg>
                            <span className="font-bold text-lg tracking-wide">Call Us</span>
                        </button>

                        <button
                            className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 group active:scale-95"
                            onClick={() => window.open('https://wa.me/919415981641', '_blank')}
                        >
                            <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            <span className="font-bold text-lg tracking-wide">WhatsApp Us</span>
                        </button>
                    </div>

                    <div className="mt-4 pt-4 border-t border-gray-100 text-center">
                        <p className="text-[10px] text-gray-400 font-medium uppercase tracking-wider mb-0.5">
                            Office Hours
                        </p>
                        <p className="text-[11px] text-gray-500 font-semibold">
                            Monday - Saturday • 9:00 AM - 2:00 PM
                        </p>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
