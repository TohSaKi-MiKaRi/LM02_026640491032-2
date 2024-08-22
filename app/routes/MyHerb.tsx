import { SetStateAction, useState } from "react";

let nextId = 1;

export default function CreateCard() {
    const [name, setName] = useState('');
    const [info, setinfo] = useState('');
    const [address, setAddress] = useState('');
    const [note, setNote] = useState('');
    const [con, setcon] = useState('');
    const [te, sette] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [cards, setCards] = useState([]);
    const [selectedCard, setSelectedCard] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleClickAdd = (na: string, inf: string, ad: string, no: string, img: string, tee:string) => {
        setCards([
            ...cards,
            {
                id: nextId++,
                name: na,
                info: inf,
                address: ad,
                note: no,
                image: img,
                te:tee
            }
        ]);

       
        setName('');
        setinfo('');
        setAddress('');
        setNote('');
        setImageUrl('');
        setinfo('');
        setcon('');
        sette('');
    };

    const handleOpenModal = (card: SetStateAction<null>) => {
        setSelectedCard(card);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedCard(null);
    };

    return (
        <div className="p-6 font-sans">
            <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">เพิ่มข้อมูลยาสมุนไพร</h1>
            <div className="max-w-md mx-auto mb-6">
                <div className="mb-3">
                    <label className="block text-sm font-bold mb-1">ชื่อสมุนไพร:</label>
                    <input
                        name="cName"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-2 py-1 border rounded-md text-sm"
                    />
                </div>
                <div className="mb-3">
                    <label className="block text-sm font-bold mb-1">รายละเอียด:</label>
                    <input
                        name="cPhone"
                        value={info}
                        onChange={(e) => setinfo(e.target.value)}
                        className="w-full px-2 py-1 border rounded-md text-sm"
                        pattern="[0-9]*"
                        inputMode="numeric"
                    />
                </div>
                <div className="mb-3">
                    <label className="block text-sm font-bold mb-1">สรรพคุณ:</label>
                    <textarea
                        name="cAddress"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="w-full px-2 py-1 border rounded-md text-sm"
                    />
                </div>
                <form className="max-w-sm mx-auto">
  <label form="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">นำไปใช้</label>
  <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    <option selected>ทั้งภายในและภายนอก</option>
    <option value="out">ภายนอก</option>
    <option value="in">ภายใน</option>
  </select>
</form>
                <div className="mb-3">
                    <label className="block text-sm font-bold mb-1">ภาพตัวอย่าง:</label>
                    <input
                        name="cImage"
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                        className="w-full px-2 py-1 border rounded-md text-sm"
                    />
                </div>
                <div className="mb-3">
                    <label className="block text-sm font-bold mb-1">ผู้ผลิต:</label>
                    <input
                        name="cPhone"
                        value={te}
                        onChange={(e) => sette(e.target.value)}
                        className="w-full px-2 py-1 border rounded-md text-sm"
                        pattern="[0-9]*"
                        inputMode="numeric"
                    />
                </div>
                <form className="max-w-sm mx-auto">
  <label form="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">เลือกประเภท</label>
  <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    <option selected>เลือก</option>
    <option value="out">ไว้ทาน</option>
    <option value="in">ทา</option>
  </select>
</form>
<div className="mb-3">
                    <label className="block text-sm font-bold mb-1">ติดต่อผู้ผลิต:</label>
                    <input
                        name="cPhone"
                        value={con}
                        onChange={(e) => setcon(e.target.value)}
                        className="w-full px-2 py-1 border rounded-md text-sm"
                        pattern="[0-9]*"
                        inputMode="numeric"
                    />
                </div>
                <button onClick={() => handleClickAdd(name, info, address, note, imageUrl)} className="w-full px-3 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700">
                    เพิ่มนามบัตร
                </button>
            </div>
            
            <a href="/" className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Back</a>
        </div>
    );
}

