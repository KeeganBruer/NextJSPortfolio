import PageConstraint from "@/Components/PageConstraint";
import PageWrapper from "@/Components/PageWrapper";
import { Metadata } from "next";
import Image from "next/image";
export const metadata: Metadata = {
    title: "Meal Sync",
    description: "",
    openGraph: {
        type:"website",
        title: "Meal Sync",
        description: "",
        url: "https://keeganbruer.com/MealSync",
        images: [
            {
                url: "/project_covers/mealsync/cover.png",
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
                    >MEAL SYNC</h1>

                    <p>
                        MealSync is an all-in-one meal planning solution. MealSync allows you to keeps track of all
                        your recipes and schedule them into your week. 
                    </p>

                    <h3 className="text-xl font-bold pb-3 pt-10">Has MealSync been released yet?</h3>
                    <p>
                        Not yet, MealSync will be out on the Google Playstore in early January of 2025!
                    </p>

                    <h3 className="text-xl font-bold pb-3 pt-10">Will MealSync be available on IOS?</h3>
                    <p>
                        MealSync is coming to android in early January 2025, but getting on the Apple App Store will take a little longer.
                        But the good news, MealSync is already IOS compatible! So once we secure and validate the funding for app store registration,
                        <span className="font-bold"> Meal Sync will be coming to IOS</span> 
                    </p>
                    <h3 className="text-xl font-bold pt-10">What are the main features?</h3>
                    <div style={{paddingLeft:20}}>
                        <h4 className="font-bold pb-3 pt-5">Recipes</h4>
                        <p>
                        MealSync&apos;s core revolves around storing and managing your recipes.
                        </p>
                        <h4 className="font-bold pb-3 pt-5">Meal Planning</h4>
                        <p>
                        MealSync&apos;s core revolves around storing and managing your recipes.
                        </p>
                        <h4 className="font-bold pb-3 pt-5">Community</h4>
                        <p>
                        MealSync&apos;s core revolves around storing and managing your recipes.
                        </p>
                    </div>

                    <h3 className="text-xl font-bold pt-10">Release Plan</h3>
                    <div style={{ paddingLeft: 20 }}>
                        <div className="w-full flex justify-between pb-3 pt-5">
                            <h4 className="font-bold">Stage 1 - Beta Release</h4>
                            <span>(Android)</span>
                        </div>
                        <p>
                        </p>
                        <div className="w-full flex justify-between pb-3 pt-5">
                            <h4 className="font-bold">Stage 2 - Account Integration & Funding</h4>
                            <span>(Android)</span>
                        </div>
                        <p>
                        </p>
                        <div className="w-full flex justify-between pb-3 pt-5">
                            <h4 className="font-bold">Stage 3 - IOS Release</h4>
                            <span>(IOS & Android)</span>
                        </div>
                        <p>
                        </p>
                    </div>
                    
                    <h3 className="text-xl font-bold pb-3 pt-10">How is MealSync Different?</h3>
                    <p>
                        MealSync is local-first while still offering features to backup, share and connect.
                        One of the bennefits of local-first is that we are one of the only apps that
                        offers an unlimitted number of free local recipes.
                    </p>
                </div>
            </PageConstraint>
            <div style={{height:100}}></div>
        </PageWrapper>
    )
}