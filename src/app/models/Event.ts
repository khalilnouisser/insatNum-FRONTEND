export interface Image {
    id: number;
    url: string;
    urlxS: string;
    urlxM: string;
    urlxL: string;
}

export interface Hour {
    openTime: string;
    closeTime: string;
}

export interface EventDay {
    hours: Hour[];
    dayOfTheWeek: number;
    description?: any;
    isAvailable: boolean;
}

export interface Img {
    id: number;
    url: string;
    urlxS: string;
    urlxM: string;
    urlxL: string;
}

export interface CoverImg {
    id: number;
    url: string;
    urlxS: string;
    urlxM: string;
    urlxL: string;
}

export interface Region {
    id: number;
    label: string;
    parent?: any;
    type: number;
}

export interface Subcategory {
    id: number;
    label: string;
    parentId: number;
    profileType: number;
    parentLabel: string;
    type: number;
}

export interface Tag {
    id: number;
    label: string;
    parentId: number;
    profileType: number;
    parentLabel: string;
    type: number;
}

export interface Speciality {
    id: number;
    label: string;
    parentId: number;
    profileType: number;
    parentLabel: string;
    type: number;
}

export interface Hour2 {
    openTime: string;
    closeTime: string;
}

export interface HappyHour {
    hours: Hour2[];
    dayOfTheWeek: number;
    description: string;
    isAvailable: boolean;
}

export interface Business {
    id: number;
    adId: number;
    ad?: any;
    name: string;
    service: number;
    ambience: number;
    quality: number;
    hygiene: number;
    cookery: number;
    description: string;
    image: string;
    img: Img;
    coverImage: string;
    coverImg: CoverImg;
    address: string;
    region: Region;
    postalCode: number;
    profileType: number;
    latitude: string;
    longitude: string;
    average: number;
    budget: number;
    tel: string;
    nbrComments: number;
    nbrLikes: number;
    nbrCheckins: number;
    nbrImages: number;
    nbrCoupons: number;
    nbrEvents: number;
    claimed: boolean;
    open: boolean;
    isOpen: number;
    openInRamadan: boolean;
    fater: boolean;
    sayem: boolean;
    liked: boolean;
    valid: boolean;
    bookmarked: boolean;
    products?: any;
    beerPrice: number;
    hasMenu: boolean;
    myComment?: any;
    hasPromotion: boolean;
    subcategory?: any;
    category?: any;
    tag?: any;
    metaIdentifier: string;
    subcategories: Subcategory[];
    tags: Tag[];
    specialities: Speciality[];
    workingHours: any[];
    happyHours: HappyHour[];
    additionalInfo: any[];
    recommendedFor: any[];
    goodFor: any[];
    principalInfo: any[];
    importantInfo: any[];
    menuImages: any[];
    events?: any;
    event?: any;
    hasHappyHour: number;
}

export interface Img2 {
    id: number;
    url: string;
    urlxS: string;
    urlxM: string;
    urlxL: string;
}

export interface User {
    id: number;
    firstName: string;
    lastName: string;
    points: number;
    monthlyPoints: number;
    createDate: string;
    image: string;
    img: Img2;
    nbrComments: number;
    nbrFollowers: number;
    numberComments: number;
    numberFollowers: number;
    numberFollowings: number;
    numberLikes: number;
    numberCheckins: number;
    isFollowed: boolean;
    numberBookmarks: number;
    numberFavoriteEvents: number;
    rank: number;
    badges?: any;
}

export interface Reservation {
    id: number;
    status: number;
    firstNameUser: string;
    lastNameUser: string;
    createDate: string;
    numberPersonne: number;
    note?: any;
    user: User;
    event?: any;
}

export interface Event {
    id: number;
    adId: number;
    title: string;
    description: string;
    image: string;
    budget: number;
    startDate: string;
    endDate: string;
    startTime: string;
    endTime: string;
    acceptReservation: boolean;
    isreccurent: boolean;
    isbooked: boolean;
    isbookmarked: boolean;
    images: Image[];
    eventDays: EventDay[];
    daysSuccessifs: boolean;
    business: Business;
    reservations: Reservation[];
    nbPersonne: number;
    stateReservation: number;
}