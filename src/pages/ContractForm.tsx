import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import { toast } from 'sonner';
import PersonForm from '@/components/contract/PersonForm';
import VehicleForm from '@/components/contract/VehicleForm';
import PriceForm from '@/components/contract/PriceForm';
import DocumentsForm from '@/components/contract/DocumentsForm';
import SignaturesTab from '@/components/contract/SignaturesTab';

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

export default function ContractForm() {
  const [activeTab, setActiveTab] = useState('seller');
  const [contractData, setContractData] = useState<ContractData>({
    seller: {
      fullName: '',
      passportSeries: '',
      passportNumber: '',
      passportIssued: '',
      passportDate: '',
      address: '',
      phone: '',
    },
    buyer: {
      fullName: '',
      passportSeries: '',
      passportNumber: '',
      passportIssued: '',
      passportDate: '',
      address: '',
      phone: '',
    },
    vehicle: {
      brand: '',
      model: '',
      year: '',
      vin: '',
      engineNumber: '',
      bodyNumber: '',
      color: '',
      registrationNumber: '',
    },
    price: {
      amount: '',
      amountWords: '',
      paymentMethod: '',
    },
    documents: {
      pts: '',
      sts: '',
      other: '',
    },
  });

  const updateField = (section: keyof ContractData, field: string, value: string) => {
    setContractData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
  };

  const tabs = [
    { value: 'seller', label: 'Продавец', icon: 'User' },
    { value: 'buyer', label: 'Покупатель', icon: 'UserPlus' },
    { value: 'vehicle', label: 'Автомобиль', icon: 'Car' },
    { value: 'price', label: 'Стоимость', icon: 'Banknote' },
    { value: 'documents', label: 'Документы', icon: 'FileText' },
    { value: 'signatures', label: 'Подписи', icon: 'PenTool' },
  ];

  const handleGeneratePDF = () => {
    toast.success('Договор успешно сформирован!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4 md:p-8">
      <div className="max-w-5xl mx-auto space-y-6 animate-fade-in">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold text-slate-900">Договор купли-продажи автомобиля</h1>
          <p className="text-slate-600">Заполните все разделы для формирования договора</p>
        </div>

        <Card className="shadow-lg border-slate-200">
          <CardHeader className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-t-lg">
            <CardTitle className="flex items-center gap-2">
              <Icon name="FileText" size={24} />
              Формирование договора
            </CardTitle>
            <CardDescription className="text-indigo-100">
              Все поля обязательны для заполнения
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-6 mb-8 h-auto p-1 bg-slate-100">
                {tabs.map((tab) => (
                  <TabsTrigger
                    key={tab.value}
                    value={tab.value}
                    className="flex flex-col items-center gap-1 py-3 data-[state=active]:bg-white data-[state=active]:shadow-sm"
                  >
                    <Icon name={tab.icon as any} size={20} />
                    <span className="text-xs">{tab.label}</span>
                  </TabsTrigger>
                ))}
              </TabsList>

              <TabsContent value="seller">
                <PersonForm
                  data={contractData.seller}
                  onUpdate={(field, value) => updateField('seller', field, value)}
                  prefix="seller"
                  title="Продавец"
                />
              </TabsContent>

              <TabsContent value="buyer">
                <PersonForm
                  data={contractData.buyer}
                  onUpdate={(field, value) => updateField('buyer', field, value)}
                  prefix="buyer"
                  title="Покупатель"
                />
              </TabsContent>

              <TabsContent value="vehicle">
                <VehicleForm
                  data={contractData.vehicle}
                  onUpdate={(field, value) => updateField('vehicle', field, value)}
                />
              </TabsContent>

              <TabsContent value="price">
                <PriceForm
                  data={contractData.price}
                  onUpdate={(field, value) => updateField('price', field, value)}
                />
              </TabsContent>

              <TabsContent value="documents">
                <DocumentsForm
                  data={contractData.documents}
                  onUpdate={(field, value) => updateField('documents', field, value)}
                />
              </TabsContent>

              <TabsContent value="signatures">
                <SignaturesTab
                  contractData={contractData}
                  onGeneratePDF={handleGeneratePDF}
                />
              </TabsContent>
            </Tabs>

            <div className="mt-6 flex justify-between">
              <Button
                variant="outline"
                onClick={() => {
                  const currentIndex = tabs.findIndex(t => t.value === activeTab);
                  if (currentIndex > 0) {
                    setActiveTab(tabs[currentIndex - 1].value);
                  }
                }}
                disabled={activeTab === 'seller'}
              >
                <Icon name="ChevronLeft" className="mr-2" size={20} />
                Назад
              </Button>
              <Button
                onClick={() => {
                  const currentIndex = tabs.findIndex(t => t.value === activeTab);
                  if (currentIndex < tabs.length - 1) {
                    setActiveTab(tabs[currentIndex + 1].value);
                  }
                }}
                disabled={activeTab === 'signatures'}
                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
              >
                Далее
                <Icon name="ChevronRight" className="ml-2" size={20} />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
