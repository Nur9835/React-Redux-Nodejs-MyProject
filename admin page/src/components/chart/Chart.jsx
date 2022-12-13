
import {
    LineChart,
    Line,
    XAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
  } from "recharts";
  
  export default function Chart({ title, data, dataKey, grid }) {
  
    return (
      <div className="chart">

        <h3 className="chartTitle">{title}</h3>
        
{/* aspet, en-boy oranı otomatik boyutların ve
 diğer bazı düzen işlevlerinin
  hesaplanmasında 
kullanılacak olan kutu için tercih
 edilen bir en boy oranını ayarlar. */}


{/* REHCARTS İLE GRAFİK */}
        <ResponsiveContainer width="100%" aspect={4 / 1}>
          
          <LineChart data={data}>

{/* x eksen YAxis DE Y EKSENİ */}
            <XAxis dataKey="name" stroke="#5550bd" />
            
           {/* Grafik çizgisi Active User'a göre çizilecek */}
            <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />

  {/* Grafik üzerine geldiğinde gelen bilgi alanı */}
            <Tooltip />
            {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
            {/* CartesianGrid grafik arka planında oluşan ızgara görünümü */}
          </LineChart>

        </ResponsiveContainer>

      </div>
    );
  }