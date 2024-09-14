import { NextResponse } from "next/server";
import { i18n } from "./i18n-config";
import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from 'negotiator'



function getLocale(request) {
  const negotiatorHeaders = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  let languages = new Negotiator({ headers: negotiatorHeaders }).languages();
  const locales = i18n.locales; 
  try {
    return matchLocale(languages, locales, 'fr');
  } catch (err) {
    return i18n.defaultLocale;
  }
}

export function middleware(request) {
  const pathname = request.nextUrl.pathname;
  // Vérifiez si la langue est déjà dans l'URL
  if (i18n.locales.some(locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`)) {
    console.log("Redirection"); 
    return NextResponse.next();
  }

  // Récupérez la langue depuis les cookies ou déduisez-la
  let locale = getLocale(request) || i18n.defaultLocale;
  console.log(`changement de locale: ${locale}  = `)
  // Redirigez vers la nouvelle URL avec la langue
  const url = new URL(`/${locale}${pathname}`, request.url);
  console.log('middleware: '+url)
  return NextResponse.redirect(url);
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml).*)"],
};