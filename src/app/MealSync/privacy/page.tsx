import PageConstraint from "@/Components/PageConstraint";
import PageWrapper from "@/Components/PageWrapper";
import { CONSTANTS } from "@/Constants";
import { Metadata } from "next";
import Image from "next/image";
export const metadata: Metadata = {
    title: "Meal Sync | Privacy Policy",
    description: "Meals are a corner-stone of community, Everyone Eats. MealSync focuses on bringing more collaboration to the dinner-making process.",
    openGraph: {
        type:"website",
        title: "Meal Sync | Privacy Policy",
        description: "Meals are a corner-stone of community, Everyone Eats. MealSync focuses on bringing more collaboration to the dinner-making process.",
        url: "https://keeganbruer.com/MealSync/privacy",
        images: [
            {
                url: `${CONSTANTS.BASE_URL}/MealSync_Social_Cover.png`,
                width: 1200,
                height: 627
            }
        ]
    }
  };
export default function MealSync() {
    return (
        <PageWrapper color="#3C8864">
            <div style={{height:100}}></div>
            <Image
                alt="Meal Sync Icon"
                src="/project_covers/mealsync/icon.png"
                width={150} height={150}
                style={{ borderRadius: 300, position:"relative", zIndex:1, backgroundColor:"#3C8864", border: "1px solid black", marginBottom:-50 }}
            ></Image>
            <PageConstraint>
                <div style={{
                    width: "100%", display: "flex", flexDirection: "column", color: "white", backgroundColor: "#363636",
                    padding: 20, paddingTop: 60,
                    
                }}>
                    <h1
                        className="font-bold w-full text-center"
                        style={{ fontSize:50, color: "white",textShadow: "0 0 3px #000000, 0 0 5px #000000" }}
                    >MEAL SYNC&apos;S PRIVACY POLICY</h1>

                    <p>
                        Meals are a corner-stone of community, &quot;Everyone Eats&quot;.
                        MealSync focuses on bringing more collaboration to the dinner-making process.
                        MealSync achieves better collaboration through easily-sharable recipes,
                        shared meal plans, and real-time grocery lists (for those simultaneous multi-store shopping trips).
                    </p>

                    
                    
                </div>
            </PageConstraint>
            <div style={{height:100}}></div>
        </PageWrapper>
    )
}