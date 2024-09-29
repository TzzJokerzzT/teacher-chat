import { FormRegisterProps, PostResponse } from "@/types/types.env";

export async function POST(request: Request) => {
    const data: FormRegisterProps = await request.json()

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)  
        })
        const result = await response.json()

        if (!response.ok && result.status === "success") {
            const response: PostResponse = {
              success: true,
              message: result.message,
              user: result.user,
            };
      
            return NextResponse.json(response);
          } else {
            throw new Error(result.message || "Something went wrong!");
          }

    } catch (error) {
        const errorMessage = (error as Error).message || "Something went wrong!";
    const errorResponse: PostResponse = {
      success: false,
      message: errorMessage,
    };

    return NextResponse.json(errorResponse, { status: 500 });
    }
}