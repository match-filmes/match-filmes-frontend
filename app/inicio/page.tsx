import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from "@/components/ui/dropdown-menu"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import Image from "next/image"
import { JSX, SVGProps } from "react"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-background/80 backdrop-blur-sm sticky top-0 z-50 px-4 md:px-6 h-14 flex items-center justify-between">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <MoveIcon className="h-12 w-12" />
          <span className="text-lg font-bold">MatchFilmes</span>
        </Link>
        <nav className="hidden lg:flex items-center gap-6">
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Home
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Movies
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Series
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Kids
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <SearchIcon className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar className="h-9 w-9">
                <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                <AvatarFallback>JP</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>My Account</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      <main className="flex-1">
        <section className="relative h-[600px] sm:h-[700px] md:h-[800px] lg:h-[900px] overflow-hidden">
          <Image
            src="/placeholder_banner.jpg"
            width={1920}
            height={1080}
            alt="Monsters, Inc."
            className="absolute inset-0 w-full h-full object-cover object-center"
            style={{ aspectRatio: "1920/1080", objectFit: "cover" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
          <div className="relative h-full flex flex-col justify-center px-4 md:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white">Monsters, Inc.</h1>
            <p className="max-w-[800px] mt-4 text-lg sm:text-xl md:text-2xl text-white">
              Monsters Incorporated is the largest scream-processing factory in Monstropolis, a city inhabited by
              monsters. The top scarer is Sulley, a huge, furry blue monster, and his assistant is Mike, a green,
              one-eyed monster.
            </p>
            <div className="mt-6 flex gap-4 items-center">
              <Button className="bg-white text-black hover:bg-gray-200 transition-colors">Watch Now</Button>
              <Button variant="outline" className="text-white hover:bg-white/20 transition-colors">
                Details
              </Button>
              <div className="flex items-center gap-1 text-yellow-500">
                <StarIcon className="w-5 h-5" />
                <StarIcon className="w-5 h-5" />
                <StarIcon className="w-5 h-5" />
                <StarIcon className="w-5 h-5" />
                <StarIcon className="w-5 h-5 text-gray-400" />
              </div>
            </div>
          </div>
        </section>
        <section className="py-8 md:py-12 lg:py-16">
          <div className="container px-4 md:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Trending Movies</h2>
              <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                See all
              </Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 md:gap-8">
              <Link href="#" className="group" prefetch={false}>
                <div className="relative w-full aspect-[2/3] rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg"
                    width={300}
                    height={450}
                    alt="The Good Dinosaur"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    style={{ aspectRatio: "300/450", objectFit: "cover" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-lg font-bold">The Good Dinosaur</h3>
                    <p className="text-sm">Animation, Adventure, Family</p>
                  </div>
                </div>
              </Link>
              <Link href="#" className="group" prefetch={false}>
                <div className="relative w-full aspect-[2/3] rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg"
                    width={300}
                    height={450}
                    alt="Aladdin"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    style={{ aspectRatio: "300/450", objectFit: "cover" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-lg font-bold">Aladdin</h3>
                    <p className="text-sm">Animation, Adventure, Family</p>
                  </div>
                </div>
              </Link>
              <Link href="#" className="group" prefetch={false}>
                <div className="relative w-full aspect-[2/3] rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg"
                    width={300}
                    height={450}
                    alt="Raya and the Last Dragon"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    style={{ aspectRatio: "300/450", objectFit: "cover" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-lg font-bold">Raya and the Last Dragon</h3>
                    <p className="text-sm">Animation, Adventure, Fantasy</p>
                  </div>
                </div>
              </Link>
              <Link href="#" className="group" prefetch={false}>
                <div className="relative w-full aspect-[2/3] rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg"
                    width={300}
                    height={450}
                    alt="Luca"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    style={{ aspectRatio: "300/450", objectFit: "cover" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-lg font-bold">Luca</h3>
                    <p className="text-sm">Animation, Adventure, Comedy</p>
                  </div>
                </div>
              </Link>
              <Link href="#" className="group" prefetch={false}>
                <div className="relative w-full aspect-[2/3] rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg"
                    width={300}
                    height={450}
                    alt="Tangled"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    style={{ aspectRatio: "300/450", objectFit: "cover" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-lg font-bold">Tangled</h3>
                    <p className="text-sm">Animation, Adventure, Comedy</p>
                  </div>
                </div>
              </Link>
              <Link href="#" className="group" prefetch={false}>
                <div className="relative w-full aspect-[2/3] rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg"
                    width={300}
                    height={450}
                    alt="Coco"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    style={{ aspectRatio: "300/450", objectFit: "cover" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-lg font-bold">Coco</h3>
                    <p className="text-sm">Animation, Adventure, Family</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>
        <section className="py-8 md:py-12 lg:py-16">
          <div className="container px-4 md:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Genre Filters</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button variant="ghost" className="rounded-full">
                All Popular
              </Button>
              <Button variant="ghost" className="rounded-full">
                Action
              </Button>
              <Button variant="ghost" className="rounded-full">
                Animation
              </Button>
              <Button variant="ghost" className="rounded-full">
                Adventure
              </Button>
              <Button variant="ghost" className="rounded-full">
                Horror
              </Button>
              <Button variant="ghost" className="rounded-full">
                Documentary
              </Button>
              <Button variant="ghost" className="rounded-full">
                Romance
              </Button>
              <Button variant="ghost" className="rounded-full">
                Kids
              </Button>
              <Button variant="ghost" className="rounded-full">
                Comedy
              </Button>
            </div>
          </div>
        </section>
        <section className="py-8 md:py-12 lg:py-16">
          <div className="container px-4 md:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Continue Watching</h2>
              <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                See all
              </Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 md:gap-8">
              <Link href="#" className="group relative" prefetch={false}>
                <div className="w-full aspect-[2/3] rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg"
                    width={300}
                    height={450}
                    alt="Movie Thumbnail"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    style={{ aspectRatio: "300/450", objectFit: "cover" }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <PlayIcon className="w-10 h-10 text-white" />
                  </div>
                </div>
              </Link>
              <Link href="#" className="group relative" prefetch={false}>
                <div className="w-full aspect-[2/3] rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg"
                    width={300}
                    height={450}
                    alt="Movie Thumbnail"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    style={{ aspectRatio: "300/450", objectFit: "cover" }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <PlayIcon className="w-10 h-10 text-white" />
                  </div>
                </div>
              </Link>
              <Link href="#" className="group relative" prefetch={false}>
                <div className="w-full aspect-[2/3] rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg"
                    width={300}
                    height={450}
                    alt="Movie Thumbnail"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    style={{ aspectRatio: "300/450", objectFit: "cover" }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <PlayIcon className="w-10 h-10 text-white" />
                  </div>
                </div>
              </Link>
              <Link href="#" className="group relative" prefetch={false}>
                <div className="w-full aspect-[2/3] rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg"
                    width={300}
                    height={450}
                    alt="Movie Thumbnail"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    style={{ aspectRatio: "300/450", objectFit: "cover" }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <PlayIcon className="w-10 h-10 text-white" />
                  </div>
                </div>
              </Link>
              <Link href="#" className="group relative" prefetch={false}>
                <div className="w-full aspect-[2/3] rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg"
                    width={300}
                    height={450}
                    alt="Movie Thumbnail"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    style={{ aspectRatio: "300/450", objectFit: "cover" }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <PlayIcon className="w-10 h-10 text-white" />
                  </div>
                </div>
              </Link>
              <Link href="#" className="group relative" prefetch={false}>
                <div className="w-full aspect-[2/3] rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg"
                    width={300}
                    height={450}
                    alt="Movie Thumbnail"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    style={{ aspectRatio: "300/450", objectFit: "cover" }}
                  />
                  <div className="absolute" />
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

function MoveIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} width="900" height="900" viewBox="0 0 900 900" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="900" height="900" fill="none" />
      <path d="M466.234 292.218C466.234 276.041 445.342 269.944 436.14 283.355C351.719 406.398 471.688 411.938 471.688 471.75C471.688 495.968 451.845 515.563 427.483 515.244C403.51 514.938 384.438 495.009 384.438 471.105V412.985C384.438 398.235 366.394 391.078 356.197 401.77C337.95 420.883 319 453.623 319 493.5C319 565.459 377.71 624 449.875 624C522.04 624 580.75 565.459 580.75 493.5C580.75 377.756 466.234 362.321 466.234 292.218Z" fill="#E50914" />
    </svg>
  )
}


function PlayIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="6 3 20 12 6 21 6 3" />
    </svg>
  )
}


function SearchIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}


function StarIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}