import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface PriceData {
  amount: string;
  amountWords: string;
  paymentMethod: string;
}

interface PriceFormProps {
  data: PriceData;
  onUpdate: (field: string, value: string) => void;
}

export default function PriceForm({ data, onUpdate }: PriceFormProps) {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="grid grid-cols-1 gap-4">
        <div className="space-y-2">
          <Label htmlFor="price-amount">Стоимость (цифрами)</Label>
          <Input
            id="price-amount"
            type="number"
            placeholder="1000000"
            value={data.amount}
            onChange={(e) => onUpdate('amount', e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="price-amountWords">Стоимость (прописью)</Label>
          <Input
            id="price-amountWords"
            placeholder="Один миллион рублей"
            value={data.amountWords}
            onChange={(e) => onUpdate('amountWords', e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="price-paymentMethod">Способ оплаты</Label>
          <Input
            id="price-paymentMethod"
            placeholder="Наличными / Банковский перевод"
            value={data.paymentMethod}
            onChange={(e) => onUpdate('paymentMethod', e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
