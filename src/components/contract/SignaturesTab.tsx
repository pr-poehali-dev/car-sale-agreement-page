import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface ContractData {
  seller: {
    fullName: string;
    passportSeries: string;
    passportNumber: string;
    passportIssued: string;
    passportDate: string;
    address: string;
    phone: string;
  };
  buyer: {
    fullName: string;
    passportSeries: string;
    passportNumber: string;
    passportIssued: string;
    passportDate: string;
    address: string;
    phone: string;
  };
  vehicle: {
    brand: string;
    model: string;
    year: string;
    vin: string;
    engineNumber: string;
    bodyNumber: string;
    color: string;
    registrationNumber: string;
  };
  price: {
    amount: string;
    amountWords: string;
    paymentMethod: string;
  };
  documents: {
    pts: string;
    sts: string;
    other: string;
  };
}

interface SignaturesTabProps {
  contractData: ContractData;
  onGeneratePDF: () => void;
}

export default function SignaturesTab({ contractData, onGeneratePDF }: SignaturesTabProps) {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200">
        <h3 className="text-lg font-semibold text-green-900 mb-4 flex items-center gap-2">
          <Icon name="CheckCircle" size={24} />
          Готово к формированию
        </h3>
        <p className="text-green-800 mb-4">
          Все данные заполнены. Проверьте правильность информации перед формированием договора.
        </p>
      </div>

      <div className="space-y-6">
        <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
          <h4 className="font-semibold text-slate-900 mb-2">Продавец</h4>
          <p className="text-sm text-slate-700">{contractData.seller.fullName}</p>
          <p className="text-sm text-slate-600">
            Паспорт: {contractData.seller.passportSeries} {contractData.seller.passportNumber}
          </p>
        </div>

        <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
          <h4 className="font-semibold text-slate-900 mb-2">Покупатель</h4>
          <p className="text-sm text-slate-700">{contractData.buyer.fullName}</p>
          <p className="text-sm text-slate-600">
            Паспорт: {contractData.buyer.passportSeries} {contractData.buyer.passportNumber}
          </p>
        </div>

        <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
          <h4 className="font-semibold text-slate-900 mb-2">Транспортное средство</h4>
          <p className="text-sm text-slate-700">
            {contractData.vehicle.brand} {contractData.vehicle.model}, {contractData.vehicle.year}
          </p>
          <p className="text-sm text-slate-600">VIN: {contractData.vehicle.vin}</p>
          <p className="text-sm text-slate-600">
            Гос. номер: {contractData.vehicle.registrationNumber}
          </p>
        </div>

        <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
          <h4 className="font-semibold text-slate-900 mb-2">Стоимость</h4>
          <p className="text-sm text-slate-700">{contractData.price.amount} руб.</p>
          <p className="text-sm text-slate-600">{contractData.price.amountWords}</p>
        </div>
      </div>

      <div className="pt-4">
        <Button
          onClick={onGeneratePDF}
          className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white py-6 text-lg"
        >
          <Icon name="FileText" className="mr-2" size={24} />
          Сформировать договор
        </Button>
      </div>
    </div>
  );
}
