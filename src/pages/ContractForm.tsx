import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import { toast } from 'sonner';

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

              <TabsContent value="seller" className="space-y-6 animate-fade-in">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2 col-span-2">
                    <Label htmlFor="seller-fullName">ФИО полностью</Label>
                    <Input
                      id="seller-fullName"
                      placeholder="Иванов Иван Иванович"
                      value={contractData.seller.fullName}
                      onChange={(e) => updateField('seller', 'fullName', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="seller-passportSeries">Серия паспорта</Label>
                    <Input
                      id="seller-passportSeries"
                      placeholder="1234"
                      value={contractData.seller.passportSeries}
                      onChange={(e) => updateField('seller', 'passportSeries', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="seller-passportNumber">Номер паспорта</Label>
                    <Input
                      id="seller-passportNumber"
                      placeholder="567890"
                      value={contractData.seller.passportNumber}
                      onChange={(e) => updateField('seller', 'passportNumber', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2 col-span-2">
                    <Label htmlFor="seller-passportIssued">Кем выдан</Label>
                    <Input
                      id="seller-passportIssued"
                      placeholder="ОВД района..."
                      value={contractData.seller.passportIssued}
                      onChange={(e) => updateField('seller', 'passportIssued', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="seller-passportDate">Дата выдачи</Label>
                    <Input
                      id="seller-passportDate"
                      type="date"
                      value={contractData.seller.passportDate}
                      onChange={(e) => updateField('seller', 'passportDate', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="seller-phone">Телефон</Label>
                    <Input
                      id="seller-phone"
                      placeholder="+7 (999) 123-45-67"
                      value={contractData.seller.phone}
                      onChange={(e) => updateField('seller', 'phone', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2 col-span-2">
                    <Label htmlFor="seller-address">Адрес регистрации</Label>
                    <Input
                      id="seller-address"
                      placeholder="г. Москва, ул. Ленина, д. 1, кв. 1"
                      value={contractData.seller.address}
                      onChange={(e) => updateField('seller', 'address', e.target.value)}
                    />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="buyer" className="space-y-6 animate-fade-in">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2 col-span-2">
                    <Label htmlFor="buyer-fullName">ФИО полностью</Label>
                    <Input
                      id="buyer-fullName"
                      placeholder="Петров Петр Петрович"
                      value={contractData.buyer.fullName}
                      onChange={(e) => updateField('buyer', 'fullName', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="buyer-passportSeries">Серия паспорта</Label>
                    <Input
                      id="buyer-passportSeries"
                      placeholder="4321"
                      value={contractData.buyer.passportSeries}
                      onChange={(e) => updateField('buyer', 'passportSeries', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="buyer-passportNumber">Номер паспорта</Label>
                    <Input
                      id="buyer-passportNumber"
                      placeholder="098765"
                      value={contractData.buyer.passportNumber}
                      onChange={(e) => updateField('buyer', 'passportNumber', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2 col-span-2">
                    <Label htmlFor="buyer-passportIssued">Кем выдан</Label>
                    <Input
                      id="buyer-passportIssued"
                      placeholder="ОВД района..."
                      value={contractData.buyer.passportIssued}
                      onChange={(e) => updateField('buyer', 'passportIssued', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="buyer-passportDate">Дата выдачи</Label>
                    <Input
                      id="buyer-passportDate"
                      type="date"
                      value={contractData.buyer.passportDate}
                      onChange={(e) => updateField('buyer', 'passportDate', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="buyer-phone">Телефон</Label>
                    <Input
                      id="buyer-phone"
                      placeholder="+7 (999) 765-43-21"
                      value={contractData.buyer.phone}
                      onChange={(e) => updateField('buyer', 'phone', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2 col-span-2">
                    <Label htmlFor="buyer-address">Адрес регистрации</Label>
                    <Input
                      id="buyer-address"
                      placeholder="г. Санкт-Петербург, пр. Невский, д. 2, кв. 2"
                      value={contractData.buyer.address}
                      onChange={(e) => updateField('buyer', 'address', e.target.value)}
                    />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="vehicle" className="space-y-6 animate-fade-in">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="vehicle-brand">Марка</Label>
                    <Input
                      id="vehicle-brand"
                      placeholder="Toyota"
                      value={contractData.vehicle.brand}
                      onChange={(e) => updateField('vehicle', 'brand', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="vehicle-model">Модель</Label>
                    <Input
                      id="vehicle-model"
                      placeholder="Camry"
                      value={contractData.vehicle.model}
                      onChange={(e) => updateField('vehicle', 'model', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="vehicle-year">Год выпуска</Label>
                    <Input
                      id="vehicle-year"
                      placeholder="2020"
                      value={contractData.vehicle.year}
                      onChange={(e) => updateField('vehicle', 'year', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="vehicle-color">Цвет</Label>
                    <Input
                      id="vehicle-color"
                      placeholder="Черный"
                      value={contractData.vehicle.color}
                      onChange={(e) => updateField('vehicle', 'color', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2 col-span-2">
                    <Label htmlFor="vehicle-vin">VIN номер</Label>
                    <Input
                      id="vehicle-vin"
                      placeholder="JTNBH46K103001234"
                      value={contractData.vehicle.vin}
                      onChange={(e) => updateField('vehicle', 'vin', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="vehicle-engineNumber">Номер двигателя</Label>
                    <Input
                      id="vehicle-engineNumber"
                      placeholder="1AZFE1234567"
                      value={contractData.vehicle.engineNumber}
                      onChange={(e) => updateField('vehicle', 'engineNumber', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="vehicle-bodyNumber">Номер кузова</Label>
                    <Input
                      id="vehicle-bodyNumber"
                      placeholder="BODY123456"
                      value={contractData.vehicle.bodyNumber}
                      onChange={(e) => updateField('vehicle', 'bodyNumber', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2 col-span-2">
                    <Label htmlFor="vehicle-registrationNumber">Гос. номер</Label>
                    <Input
                      id="vehicle-registrationNumber"
                      placeholder="А123БВ199"
                      value={contractData.vehicle.registrationNumber}
                      onChange={(e) => updateField('vehicle', 'registrationNumber', e.target.value)}
                    />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="price" className="space-y-6 animate-fade-in">
                <div className="grid grid-cols-1 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="price-amount">Цена (цифрами)</Label>
                    <Input
                      id="price-amount"
                      placeholder="1000000"
                      type="number"
                      value={contractData.price.amount}
                      onChange={(e) => updateField('price', 'amount', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="price-amountWords">Цена (прописью)</Label>
                    <Input
                      id="price-amountWords"
                      placeholder="Один миллион рублей"
                      value={contractData.price.amountWords}
                      onChange={(e) => updateField('price', 'amountWords', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="price-paymentMethod">Способ оплаты</Label>
                    <Input
                      id="price-paymentMethod"
                      placeholder="Наличный расчет / Банковский перевод"
                      value={contractData.price.paymentMethod}
                      onChange={(e) => updateField('price', 'paymentMethod', e.target.value)}
                    />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="documents" className="space-y-6 animate-fade-in">
                <div className="grid grid-cols-1 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="documents-pts">ПТС (серия и номер)</Label>
                    <Input
                      id="documents-pts"
                      placeholder="77 УА 123456"
                      value={contractData.documents.pts}
                      onChange={(e) => updateField('documents', 'pts', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="documents-sts">СТС (серия и номер)</Label>
                    <Input
                      id="documents-sts"
                      placeholder="77 УО 654321"
                      value={contractData.documents.sts}
                      onChange={(e) => updateField('documents', 'sts', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="documents-other">Дополнительные документы</Label>
                    <Input
                      id="documents-other"
                      placeholder="Сервисная книжка, доп. комплект ключей"
                      value={contractData.documents.other}
                      onChange={(e) => updateField('documents', 'other', e.target.value)}
                    />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="signatures" className="space-y-6 animate-fade-in">
                <div className="space-y-6">
                  <div className="p-6 bg-slate-50 rounded-lg border-2 border-dashed border-slate-300">
                    <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                      <Icon name="CheckCircle" size={20} className="text-green-600" />
                      Проверка данных
                    </h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-slate-600">Продавец:</span>
                        <span className="font-medium">{contractData.seller.fullName || '—'}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Покупатель:</span>
                        <span className="font-medium">{contractData.buyer.fullName || '—'}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Автомобиль:</span>
                        <span className="font-medium">
                          {contractData.vehicle.brand && contractData.vehicle.model
                            ? `${contractData.vehicle.brand} ${contractData.vehicle.model}`
                            : '—'}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Цена:</span>
                        <span className="font-medium">
                          {contractData.price.amount ? `${contractData.price.amount} ₽` : '—'}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 bg-slate-50 rounded-lg border border-slate-200">
                      <h4 className="font-semibold mb-4 flex items-center gap-2">
                        <Icon name="User" size={18} />
                        Подпись продавца
                      </h4>
                      <div className="h-32 border-2 border-dashed border-slate-300 rounded-lg bg-white flex items-center justify-center text-slate-400">
                        Место для подписи
                      </div>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-lg border border-slate-200">
                      <h4 className="font-semibold mb-4 flex items-center gap-2">
                        <Icon name="UserPlus" size={18} />
                        Подпись покупателя
                      </h4>
                      <div className="h-32 border-2 border-dashed border-slate-300 rounded-lg bg-white flex items-center justify-center text-slate-400">
                        Место для подписи
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>

            <div className="mt-8 flex justify-between items-center pt-6 border-t">
              <Button
                variant="outline"
                onClick={() => {
                  const currentIndex = tabs.findIndex((t) => t.value === activeTab);
                  if (currentIndex > 0) {
                    setActiveTab(tabs[currentIndex - 1].value);
                  }
                }}
                disabled={activeTab === 'seller'}
                className="gap-2"
              >
                <Icon name="ChevronLeft" size={18} />
                Назад
              </Button>

              {activeTab === 'signatures' ? (
                <Button
                  onClick={handleGeneratePDF}
                  className="gap-2 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700"
                >
                  <Icon name="Download" size={18} />
                  Сформировать договор
                </Button>
              ) : (
                <Button
                  onClick={() => {
                    const currentIndex = tabs.findIndex((t) => t.value === activeTab);
                    if (currentIndex < tabs.length - 1) {
                      setActiveTab(tabs[currentIndex + 1].value);
                    }
                  }}
                  className="gap-2"
                >
                  Далее
                  <Icon name="ChevronRight" size={18} />
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
