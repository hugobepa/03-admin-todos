//https://nextjs.org/docs/app/api-reference/functions/cookies
import { TabBar } from "@/components";
import { Metadata } from "next";
import { cookies } from 'next/headers'



export const metadata: Metadata = {
    title: 'Cookies page',
    description: 'Id incididunt Lorem velit ut velit pariatur commodo esse proident pariatur pariatur ut ipsum dolor.',
};

export default async function CookiesPage() {

    const cookieStore = await cookies()
    const cookieTab = Number(cookieStore.get('selectedTab')?.value ?? '1');//{+cookieTab}

    const allCookies = cookieStore.getAll(); //{JSON.stringify(allCookies)}

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

            <div className="flex flex-col">
               
                <span className="text-3xl">Tabs</span>
                <TabBar currentTab={cookieTab} />
            </div>

        </div>
    );
}