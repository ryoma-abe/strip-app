"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckIcon,
  SparklesIcon,
  ImageIcon,
  WandIcon,
  ZapIcon,
  LayersIcon,
  PaletteIcon,
  Users2Icon,
  BarChart3Icon,
  ShieldIcon,
  ArrowRightIcon,
  MenuIcon,
  XIcon,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-2">
              <SparklesIcon className="h-8 w-8 text-purple-600" />
              <span className="text-xl font-bold">AI Creator Studio</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <button
                onClick={() => scrollToSection("features")}
                className="text-sm font-medium hover:text-purple-600 transition-colors"
              >
                機能
              </button>
              <button
                onClick={() => scrollToSection("use-cases")}
                className="text-sm font-medium hover:text-purple-600 transition-colors"
              >
                活用事例
              </button>
              <button
                onClick={() => scrollToSection("pricing")}
                className="text-sm font-medium hover:text-purple-600 transition-colors"
              >
                料金プラン
              </button>
              <Link href="/dashboard">
                <Button
                  variant="default"
                  className="bg-purple-600 hover:bg-purple-700"
                >
                  無料で始める
                </Button>
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <XIcon className="h-6 w-6" />
              ) : (
                <MenuIcon className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden py-4 space-y-4">
              <button
                onClick={() => scrollToSection("features")}
                className="block w-full text-left text-sm font-medium hover:text-purple-600 transition-colors"
              >
                機能
              </button>
              <button
                onClick={() => scrollToSection("use-cases")}
                className="block w-full text-left text-sm font-medium hover:text-purple-600 transition-colors"
              >
                活用事例
              </button>
              <button
                onClick={() => scrollToSection("pricing")}
                className="block w-full text-left text-sm font-medium hover:text-purple-600 transition-colors"
              >
                料金プラン
              </button>
              <Link href="/dashboard" className="block">
                <Button
                  variant="default"
                  className="w-full bg-purple-600 hover:bg-purple-700"
                >
                  無料で始める
                </Button>
              </Link>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6 p-4 bg-red-50 border-2 border-red-200 rounded-xl">
              <p className="text-lg font-bold text-red-700">
                🚧 これはデモサイトです - 実際のサービスではありません
              </p>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              次世代AIで
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                画像制作を革新する
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              AI画像生成、背景除去、画像圧縮まで。
              プロフェッショナルな画像編集ツールをワンストップで提供。
              無料クレジットで今すぐ始められます。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/dashboard">
                <Button
                  size="lg"
                  className="bg-purple-600 hover:bg-purple-700 text-lg px-8"
                >
                  無料で始める
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            <p className="mt-4 text-sm text-gray-500">
              クレジットカード不要 • 無料クレジット付き
            </p>
          </div>

          {/* Hero Image/Preview */}
          <div className="mt-16 relative">
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10"></div>
            <div className="bg-gray-900 rounded-xl shadow-2xl p-8 max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-800 rounded-lg p-4 hover:scale-105 transition-transform">
                  <ImageIcon className="h-8 w-8 text-purple-400 mb-2" />
                  <h3 className="text-white font-semibold mb-1">AI画像生成</h3>
                  <p className="text-gray-400 text-sm">
                    テキストから高品質な画像を瞬時に生成
                  </p>
                </div>
                <div className="bg-gray-800 rounded-lg p-4 hover:scale-105 transition-transform">
                  <WandIcon className="h-8 w-8 text-pink-400 mb-2" />
                  <h3 className="text-white font-semibold mb-1">背景除去</h3>
                  <p className="text-gray-400 text-sm">
                    ワンクリックで完璧な切り抜き
                  </p>
                </div>
                <div className="bg-gray-800 rounded-lg p-4 hover:scale-105 transition-transform">
                  <ZapIcon className="h-8 w-8 text-yellow-400 mb-2" />
                  <h3 className="text-white font-semibold mb-1">画像圧縮</h3>
                  <p className="text-gray-400 text-sm">
                    品質を保ちながら最大90%圧縮
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              パワフルな機能で創造性を加速
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              最先端のAI技術を活用した、プロフェッショナル向けの画像編集機能
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI Image Generation */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <SparklesIcon className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle>AI画像生成</CardTitle>
                <CardDescription>
                  テキストプロンプトから高品質な画像を瞬時に生成
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-sm">最新のAIモデル使用</span>
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-sm">日本語プロンプト対応</span>
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-sm">高解像度出力</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Background Removal */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <LayersIcon className="h-12 w-12 text-pink-600 mb-4" />
                <CardTitle>背景除去</CardTitle>
                <CardDescription>
                  AIが自動で被写体を認識し、完璧に背景を除去
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-sm">髪の毛まで精密に切り抜き</span>
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-sm">バッチ処理対応</span>
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-sm">透明PNG出力</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Image Compression */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <ZapIcon className="h-12 w-12 text-yellow-600 mb-4" />
                <CardTitle>画像圧縮</CardTitle>
                <CardDescription>
                  品質を保ちながら、ファイルサイズを大幅に削減
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-sm">最大90%サイズ削減</span>
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-sm">WebP/AVIF対応</span>
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-sm">一括圧縮機能</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="use-cases" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              あらゆる業界で活用されています
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              デザイナーからマーケターまで、様々な職種の方々に選ばれています
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <PaletteIcon className="h-6 w-6 text-purple-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  デザイナー・クリエイター
                </h3>
                <p className="text-gray-600">
                  アイデアを瞬時にビジュアル化。制作時間を大幅に短縮し、
                  より多くの創造的な作業に集中できます。
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center">
                  <BarChart3Icon className="h-6 w-6 text-pink-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">マーケター</h3>
                <p className="text-gray-600">
                  SNS投稿、広告バナー、プレゼン資料まで。
                  高品質なビジュアルコンテンツを即座に作成。
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Users2Icon className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">SNS運用者</h3>
                <p className="text-gray-600">
                  毎日の投稿に必要な画像を効率的に作成。
                  エンゲージメント率の向上に貢献します。
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <ShieldIcon className="h-6 w-6 text-green-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  個人・小規模事業者
                </h3>
                <p className="text-gray-600">
                  プロ級の画像編集を手軽に。外注コストを削減しながら、
                  ビジネスの視覚的な品質を向上。
                </p>
              </div>
            </div>
          </div>

          {/* Success Metrics */}
          <div className="mt-20 bg-purple-50 rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-purple-600 mb-2">
                  10万+
                </div>
                <p className="text-gray-600">アクティブユーザー</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-600 mb-2">
                  500万+
                </div>
                <p className="text-gray-600">生成された画像数</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-600 mb-2">
                  98%
                </div>
                <p className="text-gray-600">顧客満足度</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              シンプルで透明な料金プラン
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              無料プランから始められます。必要に応じてアップグレード可能。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Starter Plan */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <SparklesIcon className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle>Starter</CardTitle>
                <CardDescription>個人利用に最適なプランです</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold">¥1,000</span>
                  <span className="text-gray-500">/月</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-sm">月50クレジット付与</span>
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-sm">基本的な画像生成</span>
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-sm">メールサポート</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="/dashboard" className="w-full">
                  <Button variant="outline" className="w-full">
                    Starterプランを選択
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            {/* Pro Plan */}
            <Card className="hover:shadow-lg transition-shadow border-purple-200 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-purple-600 text-white">人気</Badge>
              </div>
              <CardHeader>
                <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mb-4">
                  <svg
                    className="h-6 w-6 text-purple-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <CardTitle>Pro</CardTitle>
                <CardDescription>
                  プロフェッショナルな制作活動に
                </CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold">¥2,000</span>
                  <span className="text-gray-500">/月</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-sm">月120クレジット付与</span>
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-sm">優先サポート</span>
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-sm">商用利用可</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="/dashboard" className="w-full">
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">
                    Proプランを選択
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            {/* Enterprise Plan */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-center w-12 h-12 bg-yellow-100 rounded-lg mb-4">
                  <svg
                    className="h-6 w-6 text-yellow-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 3l14 9-14 9V3z"
                    />
                  </svg>
                </div>
                <CardTitle>Enterprise</CardTitle>
                <CardDescription>
                  ビジネス向けの大規模な制作活動に
                </CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold">¥5,000</span>
                  <span className="text-gray-500">/月</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-sm">月300クレジット付与</span>
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-sm">24時間優先サポート</span>
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-sm">商用利用可</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="/dashboard" className="w-full">
                  <Button variant="outline" className="w-full">
                    Enterpriseプランを選択
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>

          {/* FAQ */}
          <div className="mt-20 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-8">
              よくある質問
            </h3>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold mb-2">クレジットとは何ですか？</h4>
                <p className="text-gray-600">
                  クレジットは各機能を利用する際に消費されるポイントです。
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold mb-2">
                  無料プランから有料プランへの移行はいつでも可能ですか？
                </h4>
                <p className="text-gray-600">
                  はい、いつでもアップグレード可能です。
                  <br />
                  アップグレード後は即座に追加機能が利用できます。
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold mb-2">
                  生成した画像の商用利用は可能ですか？
                </h4>
                <p className="text-gray-600">
                  有料プランでは商用利用が可能です。
                  <br />
                  フリープランでは個人利用のみとなります。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            今すぐ始めて、創造性を解き放とう
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            無料クレジットで全機能をお試しください。
            <br />
            クレジットカード登録は不要です。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/dashboard">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                無料で始める
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
          <p className="mt-4 text-white/80">
            無料プランで利用可能 • いつでもキャンセル可能
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4">
          {/* Demo Notice */}
          <div className="text-center mb-8 p-4 bg-red-900/20 border border-red-800 rounded-lg">
            <p className="text-red-300 font-medium">
              ⚠️
              このサイトはデモンストレーション目的で作成されており、実際のAI画像生成サービスではありません
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-semibold text-white mb-4">製品</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    機能
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    料金プラン
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    API
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    ステータス
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">会社</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    会社概要
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    採用情報
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    ブログ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    お問い合わせ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">サポート</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    ヘルプセンター
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    ドキュメント
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    コミュニティ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    チュートリアル
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">法的情報</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    利用規約
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    プライバシーポリシー
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    特定商取引法
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    セキュリティ
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <SparklesIcon className="h-6 w-6 text-purple-400" />
              <span className="font-semibold text-white">
                AI Creator Studio
              </span>
            </div>
            <p className="text-sm">
              © 2024 AI Creator Studio. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
