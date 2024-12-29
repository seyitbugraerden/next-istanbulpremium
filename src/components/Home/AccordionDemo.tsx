import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function AccordionDemo() {
  return (
    <section className="bg-darkblue bg_blue flex items-center relative py-36">
      <div className="container grid grid-cols-2">
        <div className="col-span-2 lg:col-span-1">
          <h6 className="text-red-500 text-sm font-bold">
            Sıkça Sorulan Sorular (SSS)
          </h6>
          <h2 className="text-white text-3xl font-bold">
            Araç Tamiri Hakkında Merak Edilenler
          </h2>
          <Accordion type="single" collapsible className="w-full text-black mt-6">
            <AccordionItem value="item-1" className="w-full">
              <AccordionTrigger>
                Araç tamir süreci ne kadar sürer?
              </AccordionTrigger>
              <AccordionContent>
                Araç tamir süresi, arızanın türüne ve yoğunluğuna bağlı olarak
                değişiklik göstermektedir. Genellikle basit tamirler 1-2 gün
                içinde tamamlanırken, daha karmaşık sorunlar birkaç gün
                alabilir. Tamir süresi hakkında daha kesin bilgi almak için
                bizimle iletişime geçebilirsiniz.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="w-full">
              <AccordionTrigger>
                Tamir için randevu almak zorunlu mu?
              </AccordionTrigger>
              <AccordionContent>
                Evet, tamir işlemleri için randevu almanız önerilir. Bu, size
                daha iyi hizmet verebilmemiz ve bekleme sürenizi en aza
                indirmemiz için önemlidir. Randevu almak için web sitemiz
                üzerinden veya telefonla bizimle iletişime geçebilirsiniz.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="w-full">
              <AccordionTrigger>
                Hangi araç markalarını tamir ediyorsunuz?
              </AccordionTrigger>
              <AccordionContent>
                Tüm araç markalarına hizmet vermekteyiz. Özellikle yaygın
                markalar üzerinde uzmanlaşmış teknisyenlerimiz bulunmaktadır.
                Araç markanızla ilgili özel bir sorunuz varsa, lütfen bizimle
                iletişime geçin.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="w-full">
              <AccordionTrigger>
                Tamir işlemleri için garanti veriyor musunuz?
              </AccordionTrigger>
              <AccordionContent>
                Evet, yaptığımız tüm tamir işlemleri için belirli bir süreyle
                garanti vermekteyiz. Garanti süresi, yapılan işleme ve
                kullanılan parçalara bağlı olarak değişiklik gösterebilir.
                Detaylı bilgi için lütfen bizimle iletişime geçin.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5" className="w-full">
              <AccordionTrigger>
                Ödeme seçenekleriniz nelerdir?
              </AccordionTrigger>
              <AccordionContent>
                Ödeme seçeneklerimiz arasında nakit, kredi kartı ve banka
                havalesi bulunmaktadır. Ayrıca bazı durumlarda taksit imkanı da
                sunmaktayız. Ödeme yöntemleri hakkında daha fazla bilgi almak
                için lütfen bizimle iletişime geçin.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="hidden lg:block"></div>
      </div>
    </section>
  );
}
