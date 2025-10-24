import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface VehicleData {
  brand: string;
  model: string;
  year: string;
  vin: string;
  engineNumber: string;
  bodyNumber: string;
  color: string;
  registrationNumber: string;
}

interface VehicleFormProps {
  data: VehicleData;
  onUpdate: (field: string, value: string) => void;
}

export default function VehicleForm({ data, onUpdate }: VehicleFormProps) {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="vehicle-brand">Марка</Label>
          <Input
            id="vehicle-brand"
            placeholder="Toyota"
            value={data.brand}
            onChange={(e) => onUpdate('brand', e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="vehicle-model">Модель</Label>
          <Input
            id="vehicle-model"
            placeholder="Camry"
            value={data.model}
            onChange={(e) => onUpdate('model', e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="vehicle-year">Год выпуска</Label>
          <Input
            id="vehicle-year"
            placeholder="2020"
            value={data.year}
            onChange={(e) => onUpdate('year', e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="vehicle-color">Цвет</Label>
          <Input
            id="vehicle-color"
            placeholder="Белый"
            value={data.color}
            onChange={(e) => onUpdate('color', e.target.value)}
          />
        </div>
        <div className="space-y-2 col-span-2">
          <Label htmlFor="vehicle-vin">VIN номер</Label>
          <Input
            id="vehicle-vin"
            placeholder="JTDKBRFU0L3123456"
            value={data.vin}
            onChange={(e) => onUpdate('vin', e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="vehicle-engineNumber">Номер двигателя</Label>
          <Input
            id="vehicle-engineNumber"
            placeholder="1234567"
            value={data.engineNumber}
            onChange={(e) => onUpdate('engineNumber', e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="vehicle-bodyNumber">Номер кузова</Label>
          <Input
            id="vehicle-bodyNumber"
            placeholder="ABC123456"
            value={data.bodyNumber}
            onChange={(e) => onUpdate('bodyNumber', e.target.value)}
          />
        </div>
        <div className="space-y-2 col-span-2">
          <Label htmlFor="vehicle-registrationNumber">Регистрационный номер</Label>
          <Input
            id="vehicle-registrationNumber"
            placeholder="А123BC777"
            value={data.registrationNumber}
            onChange={(e) => onUpdate('registrationNumber', e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
