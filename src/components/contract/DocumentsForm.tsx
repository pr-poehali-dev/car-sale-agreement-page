import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface DocumentsData {
  pts: string;
  sts: string;
  other: string;
}

interface DocumentsFormProps {
  data: DocumentsData;
  onUpdate: (field: string, value: string) => void;
}

export default function DocumentsForm({ data, onUpdate }: DocumentsFormProps) {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="grid grid-cols-1 gap-4">
        <div className="space-y-2">
          <Label htmlFor="documents-pts">ПТС (серия и номер)</Label>
          <Input
            id="documents-pts"
            placeholder="77 АА 123456"
            value={data.pts}
            onChange={(e) => onUpdate('pts', e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="documents-sts">СТС (серия и номер)</Label>
          <Input
            id="documents-sts"
            placeholder="77 ВВ 654321"
            value={data.sts}
            onChange={(e) => onUpdate('sts', e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="documents-other">Другие документы</Label>
          <Input
            id="documents-other"
            placeholder="Сервисная книжка, дополнительное оборудование"
            value={data.other}
            onChange={(e) => onUpdate('other', e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
