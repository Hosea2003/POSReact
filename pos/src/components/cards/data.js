import{
    UilClipboardAlt, UilMoneyWithdrawal, UilUsdSquare
}from '@iconscout/react-unicons'

export const CardsData=[
    {
        title:"Vente",
        color:{
            backGround:"linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
            boxShadow:"0px 10px 20px 0px #e0c6f5",
        },
        barValue:70,
        value:"25,970",
        png:UilUsdSquare,
        seiries:[
            {
                name:"Vente",
                data:[31,40,28,51,42,109,100]
            }
        ]
    },

    {
        title:"Dépense",
        color:{
            backGround:"linear-gradient(rgb(248,212,154) -146.42%, rgb(255 202 113) -46.42%)",
            boxShadow:"0px 10px 20px 0px #f9d59b",
        },
        barValue:60,
        value:"4,270",
        png:UilClipboardAlt,
        seiries:[
            {
                name:"Dépense",
                data:[10, 25, 15, 30, 12, 15, 20]
            }
        ]
    },

    {
        title:"Revenue",
        color:{ 
            backGround:"linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
            boxShadow:"0px 10px 20px 0px #e0c6f5",
        },
        barValue:80,
        value:"14,270",
        png:UilMoneyWithdrawal,
        seiries:[
            {
                name:"Revenue",
                data:[10, 100, 50, 70, 80, 30, 40]
            }
        ]
    }
]