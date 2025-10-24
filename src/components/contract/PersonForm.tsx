import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface PersonData {
  fullName: string;
  passportSeries: string;
  passportNumber: string;
  passportIssued: string;
  passportDate: string;
  address: string;
  phone: string;
}

interface PersonFormProps {
  data: PersonData;
  onUpdate: (field: string, value: string) => void;
  prefix: string;
  title: string;
}

export default function PersonForm({ data, onUpdate, prefix, title }: PersonFormProps) {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2 col-span-2">
          <Label htmlFor={`${prefix}-fullName`}>ФИО полностью</Label>
          <Input
            id={`${prefix}-fullName`}
            placeholder={title === 'Продавец' ? 'Иванов Иван Иванович' : 'Петров Петр Петрович'}
            value={data.fullName}
            onChange={(e) => onUpdate('fullName', e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor={`${prefix}-passportSeries`}>Серия паспорта</Label>
          <Input
            id={`${prefix}-passportSeries`}
            placeholder="1234"
            value={data.passportSeries}
            onChange={(e) => onUpdate('passportSeries', e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor={`${prefix}-passportNumber`}>Номер паспорта</Label>
          <Input
            id={`${prefix}-passportNumber`}
            placeholder="567890"
            value={data.passportNumber}
            onChange={(e) => onUpdate('passportNumber', e.target.value)}
          />
        </div>
        <div className="space-y-2 col-span-2">
          <Label htmlFor={`${prefix}-passportIssued`}>Кем выдан</Label>
          <Input
            id={`${prefix}-passportIssued`}
            placeholder="ОВД района..."
            value={data.passportIssued}
            onChange={(e) => onUpdate('passportIssued', e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor={`${prefix}-passportDate`}>Дата выдачи</Label>
          <Input
            id={`${prefix}-passportDate`}
            type="date"
            value={data.passportDate}
            onChange={(e) => onUpdate('passportDate', e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor={`${prefix}-phone`}>Телефон</Label>
          <Input
            id={`${prefix}-phone`}
            placeholder="+7 (999) 123-45-67"
            value={data.phone}
            onChange={(e) => onUpdate('phone', e.target.value)}
          />
        </div>
        <div className="space-y-2 col-span-2">
          <Label htmlFor={`${prefix}-address`}>Адрес регистрации</Label>
          <Input
            id={`${prefix}-address`}
            placeholder="г. Москва, ул. Ленина, д. 1, кв. 1"
            value={data.address}
            onChange={(e) => onUpdate('address', e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
