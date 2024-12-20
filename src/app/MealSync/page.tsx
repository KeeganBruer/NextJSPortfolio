import PageConstraint from "@/Components/PageConstraint";
import PageWrapper from "@/Components/PageWrapper";
import { CONSTANTS } from "@/Constants";
import { Metadata } from "next";
import Image from "next/image";
export const metadata: Metadata = {
    title: "Meal Sync",
    description: "Meals are a corner-stone of community, Everyone Eats. MealSync focuses on bringing more collaboration to the dinner-making process.",
    openGraph: {
        type:"website",
        title: "Meal Sync",
        description: "Meals are a corner-stone of community, Everyone Eats. MealSync focuses on bringing more collaboration to the dinner-making process.",
        url: "https://keeganbruer.com/MealSync",
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
                    >MEAL SYNC</h1>

                    <p>
                        Meals are a corner-stone of community, &quot;Everyone Eats&quot;.
                        MealSync focuses on bringing more collaboration to the dinner-making process.
                        MealSync achieves better collaboration through easily-sharable recipes,
                        shared meal plans, and real-time grocery lists (for those simultanious multi-store shopping trips).
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
                            MealSync helps plan meals for families of all sizes, from solo cooks to large households.
                            Gone are the days of hearing, &quot;What&apos;s for dinner?&quot; MealSync makes meal planning a collaborative effort,
                            so everyone can have input.
                        </p>
                        <h4 className="font-bold pb-3 pt-5">Community</h4>
                        <p>
                            I&apos;ve said it before, Meals are a corner-stone of community: &quot;Everyone Eats&quot;.
                            MealSync bolsters collaboration through easily-sharable recipes, shared meal plans, and real-time grocery lists (for those simultanious
                            multi-store shopping trips).
                        </p>
                    </div>
                    
                    <h3 className="text-xl font-bold pb-3 pt-10">How is MealSync Different?</h3>
                    <p>
                        MealSync is local-first while still offering features to backup, share and connect.
                        A major benefit of our local-first model is that MealSync is one of the only apps offering
                        an unlimited number of free local recipes.
                    </p>
                    <div className="w-full flex justify-between pt-5">
                        <h3 className="text-xl font-bold">Release Plan</h3>
                        <span><span className="font-bold">Current Stage:</span> Pre-Release</span>
                    </div>
                    <div style={{ paddingLeft: 20 }}>
                        
                        <div className="w-full flex justify-between pb-3 pt-5">
                            <h4 className="font-bold">Stage 1 - Beta Release</h4>
                            <span>(Android)</span>
                        </div>
                        <p>
                            The App will release in a semi-finished stage that focuses on the local-first features. 
                            The lack of server costs plus the addition of Ads will help start the initial app funds.
                        </p>
                        <div className="w-full flex justify-between pb-3 pt-5">
                            <h4 className="font-bold">Stage 2 - Account Integration & Funding</h4>
                            <span>(Android)</span>
                        </div>
                        <p>
                            Based on the success of the first stage, Account integration (as well as user-feedback) will be integrated.
                            Accounts will start with a free-tier, and a premium tier. The premium tier, along with the Ads,
                            will be used to support the server costs of the app and build towards funding the
                            Apple App Store Registration Fee.
                        </p>
                        <div className="w-full flex justify-between pb-3 pt-5">
                            <h4 className="font-bold">Stage 3 - IOS Release</h4>
                            <span>(IOS & Android)</span>
                        </div>
                        <p>
                            Once the app has secured the funding for the yearly Apple App Store Registration Fee, an IOS version of the app 
                            will be released.
                        </p>
                        <div className="w-full flex justify-between pb-3 pt-5">
                            <h4 className="font-bold">Stage 4 - Full Release</h4>
                            <span>(IOS & Android)</span>
                        </div>
                        <p>
                            The full release will include final adjustments based on user feedback, enhanced usability, and design improvements.
                        </p>
                    </div>
                    
                    
                </div>
            </PageConstraint>
            <div style={{height:100}}></div>
        </PageWrapper>
    )
}