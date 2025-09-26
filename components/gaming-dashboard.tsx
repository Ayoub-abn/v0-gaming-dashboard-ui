"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import {
  Home,
  Library,
  Store,
  Users,
  Settings,
  MessageSquare,
  Plus,
  Search,
  Play,
  Download,
  Clock,
  Star,
  TrendingUp,
} from "lucide-react"

export function GamingDashboard() {
  const [activeTab, setActiveTab] = useState("home")

  const sidebarItems = [
    { id: "home", icon: Home, label: "Home" },
    { id: "library", icon: Library, label: "Library" },
    { id: "store", icon: Store, label: "Store" },
    { id: "community", icon: Users, label: "Community" },
    { id: "messages", icon: MessageSquare, label: "Messages" },
    { id: "settings", icon: Settings, label: "Settings" },
  ]

  const friends = [
    { name: "Alex Chen", status: "In Game", game: "Valorant", avatar: "/gamer-avatar-1.png" },
    { name: "Sarah Kim", status: "Online", game: null, avatar: "/gamer-avatar-2.png" },
    { name: "Mike Johnson", status: "In Game", game: "FIFA 23", avatar: "/gamer-avatar-3.png" },
    { name: "Emma Wilson", status: "Offline", game: null, avatar: "/gamer-avatar-4.png" },
  ]

  const gamesInProgress = [
    { title: "Cyberpunk 2077", edition: "Ultimate Edition", progress: 75 },
    { title: "The Witcher 3", edition: "Complete Edition", progress: 45 },
    { title: "Red Dead Redemption 2", edition: "Special Edition", progress: 90 },
  ]

  return (
    <div className="flex h-screen bg-background text-foreground">
      {/* Left Sidebar */}
      <div className="w-64 bg-sidebar border-r border-sidebar-border flex flex-col">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-primary">GameHub</h1>
        </div>

        <nav className="flex-1 px-4">
          {sidebarItems.map((item) => {
            const Icon = item.icon
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-all ${
                  activeTab === item.id
                    ? "bg-sidebar-primary text-sidebar-primary-foreground glow-effect"
                    : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                }`}
              >
                <Icon size={20} />
                <span className="font-medium">{item.label}</span>
              </button>
            )
          })}
        </nav>

        <div className="p-4">
          <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
            <Plus size={20} className="mr-2" />
            Add Game
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-card border-b border-border p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold text-balance">Good evening, Player</h2>
              <p className="text-muted-foreground mt-1">Ready for your next adventure?</p>
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
              <Input placeholder="Search games, friends..." className="pl-10 w-80 bg-input border-border" />
            </div>
          </div>
        </header>

        <div className="flex-1 flex overflow-hidden">
          {/* Main Dashboard */}
          <div className="flex-1 p-6 overflow-y-auto">
            {/* Featured Game */}
            <Card className="mb-8 card-hover gradient-border">
              <div className="gradient-border-inner">
                <CardContent className="p-0">
                  <div className="flex">
                    <div className="w-1/3">
                      <img
                        src="/valorant-game-cover.png"
                        alt="Valorant"
                        className="w-full h-full object-cover rounded-l-lg"
                      />
                    </div>
                    <div className="flex-1 p-8">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-3xl font-bold mb-2 text-balance">Valorant</h3>
                          <p className="text-muted-foreground mb-4 text-pretty">
                            A 5v5 character-based tactical FPS where precise gunplay meets unique agent abilities.
                          </p>
                          <div className="flex gap-2 mb-4">
                            <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                              Popular
                            </Badge>
                            <Badge variant="secondary" className="bg-accent/20 text-accent border-accent/30">
                              Multiplayer
                            </Badge>
                            <Badge variant="secondary" className="bg-chart-3/20 text-chart-3 border-chart-3/30">
                              Shooter
                            </Badge>
                          </div>
                        </div>
                        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                          <Play size={20} className="mr-2" />
                          Play Now
                        </Button>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex -space-x-2">
                          {[1, 2, 3, 4].map((i) => (
                            <Avatar key={i} className="w-8 h-8 border-2 border-background">
                              <AvatarImage src={`/reviewer-plus.png?height=32&width=32&query=reviewer+${i}`} />
                              <AvatarFallback>R{i}</AvatarFallback>
                            </Avatar>
                          ))}
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="text-accent fill-accent" size={16} />
                          <span className="text-sm font-medium">4.8</span>
                          <span className="text-sm text-muted-foreground">(2.4k reviews)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>

            {/* New Games Section */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-6 text-balance">New Games</h3>
              <div className="grid grid-cols-2 gap-6">
                <Card className="card-hover">
                  <CardContent className="p-0">
                    <img
                      src="/uncharted-4-game-cover.jpg"
                      alt="Uncharted 4"
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <div className="p-6">
                      <h4 className="text-xl font-bold mb-2">Uncharted 4</h4>
                      <p className="text-muted-foreground text-sm mb-3">Legacy of Thieves Collection</p>
                      <Button
                        variant="outline"
                        className="w-full border-primary/30 text-primary hover:bg-primary/10 bg-transparent"
                      >
                        <Download size={16} className="mr-2" />
                        Install
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-hover">
                  <CardContent className="p-0">
                    <img
                      src="/dishonored-game-cover.jpg"
                      alt="Dishonored"
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <div className="p-6">
                      <h4 className="text-xl font-bold mb-2">Dishonored</h4>
                      <p className="text-muted-foreground text-sm mb-3">Definitive Edition</p>
                      <Button
                        variant="outline"
                        className="w-full border-primary/30 text-primary hover:bg-primary/10 bg-transparent"
                      >
                        <Download size={16} className="mr-2" />
                        Install
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="grid grid-cols-2 gap-6">
              {/* Last Downloads */}
              <Card className="card-hover">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Download size={20} className="text-primary" />
                    Last Downloads
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4">
                    <img src="/fifa-23-icon.jpg" alt="FIFA 23" className="w-15 h-15 rounded-lg" />
                    <div className="flex-1">
                      <h4 className="font-bold">FIFA 23</h4>
                      <p className="text-sm text-muted-foreground">Sports Simulator</p>
                      <div className="flex items-center gap-2 mt-2">
                        <Progress value={85} className="flex-1" />
                        <span className="text-sm text-muted-foreground">85%</span>
                      </div>
                      <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                        <span>45.2 GB / 53.1 GB</span>
                        <div className="flex items-center gap-1">
                          <Clock size={14} />
                          <span>12 min left</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Your Statistics */}
              <Card className="card-hover">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp size={20} className="text-primary" />
                    Your Statistics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-6">
                    <div className="relative">
                      <svg className="w-24 h-24 transform -rotate-90">
                        <circle
                          cx="48"
                          cy="48"
                          r="40"
                          stroke="currentColor"
                          strokeWidth="8"
                          fill="none"
                          className="text-muted"
                        />
                        <circle
                          cx="48"
                          cy="48"
                          r="40"
                          stroke="currentColor"
                          strokeWidth="8"
                          fill="none"
                          strokeDasharray={`${2 * Math.PI * 40}`}
                          strokeDashoffset={`${2 * Math.PI * 40 * (1 - 0.75)}`}
                          className="text-primary"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-primary">247</div>
                          <div className="text-xs text-muted-foreground">hours</div>
                        </div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <img src="/valorant-icon.png" alt="Valorant" className="w-5 h-5 rounded" />
                            <span className="text-sm">Valorant</span>
                          </div>
                          <span className="text-sm text-muted-foreground">89h</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <img src="/fifa-icon.jpg" alt="FIFA" className="w-5 h-5 rounded" />
                            <span className="text-sm">FIFA 23</span>
                          </div>
                          <span className="text-sm text-muted-foreground">67h</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <img src="/cyberpunk-icon.jpg" alt="Cyberpunk" className="w-5 h-5 rounded" />
                            <span className="text-sm">Cyberpunk 2077</span>
                          </div>
                          <span className="text-sm text-muted-foreground">91h</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="w-80 bg-card border-l border-border p-6 overflow-y-auto">
            {/* Games in Progress */}
            <div className="mb-8">
              <h3 className="text-lg font-bold mb-4">Games in Progress</h3>
              <div className="space-y-3">
                {gamesInProgress.map((game, index) => (
                  <Card key={index} className="card-hover">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={`/.jpg?height=40&width=40&query=${game.title.toLowerCase().replace(/\s+/g, "+")}`}
                          alt={game.title}
                          className="w-10 h-10 rounded"
                        />
                        <div className="flex-1">
                          <h4 className="font-medium text-sm">{game.title}</h4>
                          <p className="text-xs text-muted-foreground">{game.edition}</p>
                          <div className="flex items-center gap-2 mt-1">
                            <Progress value={game.progress} className="flex-1 h-1" />
                            <span className="text-xs text-muted-foreground">{game.progress}%</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Friends List */}
            <div>
              <h3 className="text-lg font-bold mb-4">Friends</h3>
              <div className="space-y-3">
                {friends.map((friend, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer"
                  >
                    <div className="relative">
                      <Avatar className="w-10 h-10">
                        <AvatarImage src={friend.avatar || "/placeholder.svg"} />
                        <AvatarFallback>
                          {friend.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div
                        className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-background ${
                          friend.status === "In Game"
                            ? "bg-primary"
                            : friend.status === "Online"
                              ? "bg-chart-4"
                              : "bg-muted-foreground"
                        }`}
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-sm">{friend.name}</h4>
                      <p className="text-xs text-muted-foreground">
                        {friend.status === "In Game" && friend.game ? `Playing ${friend.game}` : friend.status}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
