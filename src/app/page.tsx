import DateCalender from '@/components/DateCalender'
import SelectCity from '@/components/SelectCity'
import SubmitBtn from '@/components/SubmitBtn'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='container flex flex-col mx-auto min-h-screen md:items-center md:justify-center'>
      {/* this is the header */}
      <div className='flex-col justify-center items-center w-full flex md:flex-row gap-10 '>
        <div className='flex flex-col gap-10'>
          <SelectCity Label={'شهر مبدا را انتخاب کنید'}/>
        <SelectCity Label={'شهر مقصد را انتخاب کنید'}/>
        <SubmitBtn/>
        </div>
      <div className='flex flex-col gap-5 items-center justify-center'>
      <p>لطفا تاریخ مورد نظر خود را از روی تقویم پایین انتخاب کنید</p>
        <DateCalender/>
      </div>
        
      </div>
    </main>
  )
}
