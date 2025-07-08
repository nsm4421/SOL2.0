"use client";

import { Menu, Search, User, File, FileCheck } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export default function SearchProductsPage() {
  return (
    <div>
      <nav className="p-2 bg-slate-600 flex justify-between text-white">
        <div className="px-2 flex items-center gap-x-3">
          <i className="cursor-pointer">
            <Tooltip>
              <TooltipTrigger asChild>
                <i className="cursor-pointer">
                  <Menu />
                </i>
              </TooltipTrigger>
              <TooltipContent>
                <p>{"사이드바 열기"}</p>
              </TooltipContent>
            </Tooltip>
          </i>
          <h1 className="text-xl font-bold">상품조회 페이지</h1>
        </div>
        <div>
          <Tooltip>
            <TooltipTrigger asChild>
              <i className="cursor-pointer">
                <User />
              </i>
            </TooltipTrigger>
            <TooltipContent>
              <p>{"Karma (122200604)"}</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </nav>

      <div className="mx-auto my-auto">
        <main className="p-2">
          <section className="mt-3 flex items-center justify-between">
            <div className="max-w-2xl flex gap-x-2 items-center">
              <Input type="text" placeholder="Search" />
              <i className="cursor-pointer">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <i className="cursor-pointer">
                      <Search />
                    </i>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{"상품검색"}</p>
                  </TooltipContent>
                </Tooltip>
              </i>
            </div>

            <div className="flex gap-x-2">
              <Input
                type="text"
                placeholder="YYYY-MM-DD"
                maxLength={10}
                inputMode="numeric"
                pattern="\d{4}-\d{2}-\d{2}"
              />
            </div>
          </section>

          <section className="mt-5">
            <table className="w-full">
              <thead className="bg-slate-200 font-bold">
                <tr>
                  <th className="px-4 py-2 text-left text-gray-700">
                    <Checkbox checked={true} aria-label="전체 선택" />
                  </th>

                  <th className="px-4 py-2 text-left text-gray-700">
                    개정일자
                  </th>

                  <th className="px-4 py-2 text-left text-gray-700">
                    통합상품코드
                  </th>
                  <th className="px-4 py-2 text-left text-gray-700 flex justify-center">{`별지`}</th>
                  <th className="px-4 py-2 text-left text-gray-700">
                    단위상품이력코드
                  </th>
                  <th className="px-4 py-2 text-left text-gray-700">
                    단위상품이력코드명
                  </th>
                  <th className="px-4 py-2 text-left text-gray-700 flex justify-center">
                    약관
                  </th>
                </tr>
              </thead>
              <tbody className="overflow-y-scroll">
                {/* 알파 */}
                <tr>
                  <td className="px-4 py-2 text-left text-md">
                    <Checkbox checked={true} />
                  </td>
                  <td className="px-4 py-2 text-left text-md">2024-04-01</td>
                  <td className="px-4 py-2 text-left text-md">MP00001</td>
                  <td className="px-4 py-2 flex justify-center">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <i className="cursor-pointer">
                          <File />
                        </i>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="start">
                        <DropdownMenuItem>상품 모델링</DropdownMenuItem>
                        <DropdownMenuItem>파일 다운로드</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </td>
                  <td className="px-4 py-2 text-left text-md">6AAAA</td>
                  <td className="px-4 py-2 text-left text-md">
                    무배당 알파Plus2504
                  </td>
                  <td className="px-4 py-2 flex justify-center">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <i className="cursor-pointer">
                          <File />
                        </i>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="start">
                        <DropdownMenuItem>상품모델링</DropdownMenuItem>
                        <DropdownMenuItem>파일 다운로드</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </td>
                </tr>

                <tr>
                  <td className="px-4 py-2 text-left text-md"></td>
                  <td className="px-4 py-2 text-left text-md"></td>
                  <td className="px-4 py-2 text-left text-md"></td>
                  <td className="px-4 py-2 flex justify-center"></td>
                  <td className="px-4 py-2 text-left text-md">6AAAB</td>
                  <td className="px-4 py-2 text-left text-md">
                    무배당 M-Basket케어프리보장보험
                  </td>
                  <td className="px-4 py-2 flex justify-center">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <i className="cursor-pointer">
                          <File />
                        </i>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="start">
                        <DropdownMenuItem>상품모델링</DropdownMenuItem>
                        <DropdownMenuItem>파일 다운로드</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </td>
                </tr>
                {/* 통합간편건강보험 */}
                <tr>
                  <td className="px-4 py-2 text-left text-md">
                    <Checkbox checked={true} />
                  </td>
                  <td className="px-4 py-2 text-left text-md">2024-04-01</td>
                  <td className="px-4 py-2 text-left text-md">MP00002</td>
                  <td className="px-4 py-2 flex justify-center">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <i className="cursor-pointer">
                          <File />
                        </i>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="start">
                        <DropdownMenuItem>상품모델링</DropdownMenuItem>
                        <DropdownMenuItem>파일 다운로드</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </td>
                  <td className="px-4 py-2 text-left text-md">6AAAC</td>
                  <td className="px-4 py-2 text-left text-md">
                    무배당 통합간편건강보험2504(통함간편심사형)
                  </td>
                  <td className="px-4 py-2 flex justify-center">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <i className="cursor-pointer">
                          <File />
                        </i>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="start">
                        <DropdownMenuItem>상품 모델링</DropdownMenuItem>
                        <DropdownMenuItem>파일 다운로드</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </td>
                </tr>

                <tr>
                  <td className="px-4 py-2 text-left text-md"></td>
                  <td className="px-4 py-2 text-left text-md"></td>
                  <td className="px-4 py-2 text-left text-md"></td>
                  <td className="px-4 py-2 text-left text-md"></td>
                  <td className="px-4 py-2 text-left text-md">6AAAD</td>
                  <td className="px-4 py-2 text-left text-md">
                    무배당 통합간편건강보험2504(355입원,수술 간편고지형)
                  </td>
                  <td className="px-4 py-2 flex justify-center">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <i className="cursor-pointer">
                          <FileCheck />
                        </i>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="start">
                        <DropdownMenuItem>상품모델링</DropdownMenuItem>
                        <DropdownMenuItem>파일 다운로드</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </td>
                </tr>

                <tr>
                  <td className="px-4 py-2 text-left text-md"></td>
                  <td className="px-4 py-2 text-left text-md"></td>
                  <td className="px-4 py-2 text-left text-md"></td>
                  <td className="px-4 py-2 text-left text-md"></td>
                  <td className="px-4 py-2 text-left text-md">6AAAE</td>
                  <td className="px-4 py-2 text-left text-md">
                    무배당 통합간편건강보험2504(일반심사형)
                  </td>
                  <td className="px-4 py-2 flex justify-center">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <i className="cursor-pointer">
                          <FileCheck />
                        </i>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="start">
                        <DropdownMenuItem>상품모델링</DropdownMenuItem>
                        <DropdownMenuItem>파일 다운로드</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
        </main>
      </div>
    </div>
  );
}
