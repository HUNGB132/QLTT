import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Table, TableHead, TableRow, TableHeader, TableBody, TableCell } from '@/components/ui/table';

export default function QLTTGiaLai() {
  const [officers, setOfficers] = useState<string[]>([]);
  const [reports, setReports] = useState<string[]>([]);
  const [inspections, setInspections] = useState<string[]>([]);
  const [penalties, setPenalties] = useState<string[]>([]);

  const [newOfficer, setNewOfficer] = useState('');
  const [newReport, setNewReport] = useState('');
  const [newInspection, setNewInspection] = useState('');
  const [newPenalty, setNewPenalty] = useState('');

  const handleAdd = (type: 'officer' | 'report' | 'inspection' | 'penalty') => {
    if (type === 'officer' && newOfficer) {
      setOfficers([...officers, newOfficer]);
      setNewOfficer('');
    }
    if (type === 'report' && newReport) {
      setReports([...reports, newReport]);
      setNewReport('');
    }
    if (type === 'inspection' && newInspection) {
      setInspections([...inspections, newInspection]);
      setNewInspection('');
    }
    if (type === 'penalty' && newPenalty) {
      setPenalties([...penalties, newPenalty]);
      setNewPenalty('');
    }
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Chi Cục Quản Lý Thị Trường Tỉnh Gia Lai</h1>
      <Tabs defaultValue="inspection">
        <TabsList>
          <TabsTrigger value="inspection">Lập Quyết Định Kiểm Tra</TabsTrigger>
          <TabsTrigger value="penalty">Xử Phạt</TabsTrigger>
          <TabsTrigger value="officer">Cập Nhật Cán Bộ</TabsTrigger>
          <TabsTrigger value="report">Tổng Hợp Báo Cáo</TabsTrigger>
        </TabsList>

        <TabsContent value="inspection">
          <Card>
            <CardContent className="p-4 space-y-4">
              <Textarea
                value={newInspection}
                onChange={(e) => setNewInspection(e.target.value)}
                placeholder="Nội dung quyết định kiểm tra"
              />
              <Button onClick={() => handleAdd('inspection')}>Thêm Quyết Định</Button>
              <Table>
                <TableHeader>
                  <TableRow><TableHead>Nội dung</TableHead></TableRow>
                </TableHeader>
                <TableBody>
                  {inspections.map((item, index) => (
                    <TableRow key={index}><TableCell>{item}</TableCell></TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="penalty">
          <Card>
            <CardContent className="p-4 space-y-4">
              <Textarea
                value={newPenalty}
                onChange={(e) => setNewPenalty(e.target.value)}
                placeholder="Nội dung xử phạt"
              />
              <Button onClick={() => handleAdd('penalty')}>Thêm Xử Phạt</Button>
              <Table>
                <TableHeader>
                  <TableRow><TableHead>Nội dung</TableHead></TableRow>
                </TableHeader>
                <TableBody>
                  {penalties.map((item, index) => (
                    <TableRow key={index}><TableCell>{item}</TableCell></TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="officer">
          <Card>
            <CardContent className="p-4 space-y-4">
              <Input
                value={newOfficer}
                onChange={(e) => setNewOfficer(e.target.value)}
                placeholder="Tên cán bộ mới"
              />
              <Button onClick={() => handleAdd('officer')}>Thêm Cán Bộ</Button>
              <Table>
                <TableHeader>
                  <TableRow><TableHead>Tên Cán Bộ</TableHead></TableRow>
                </TableHeader>
                <TableBody>
                  {officers.map((name, index) => (
                    <TableRow key={index}><TableCell>{name}</TableCell></TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="report">
          <Card>
            <CardContent className="p-4 space-y-4">
              <Textarea
                value={newReport}
                onChange={(e) => setNewReport(e.target.value)}
                placeholder="Nội dung báo cáo"
              />
              <Button onClick={() => handleAdd('report')}>Thêm Báo Cáo</Button>
              <Table>
                <TableHeader>
                  <TableRow><TableHead>Nội dung</TableHead></TableRow>
                </TableHeader>
                <TableBody>
                  {reports.map((item, index) => (
                    <TableRow key={index}><TableCell>{item}</TableCell></TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
