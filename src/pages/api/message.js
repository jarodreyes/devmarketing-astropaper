export async function post({ request }) {
  try {
    const data = await request.json();
    const message = data.message;
    console.log(message);

    // Process the message here (e.g., save to database, logging, etc.)

    return new Response(JSON.stringify({ status: "Message received" }), {
      headers: {
        "Content-Type": "application/json",
      },
      status: 200,
    });
  } catch (e) {
    return new Response(
      JSON.stringify({ status: "Error", message: e.message }),
      {
        status: 500,
      }
    );
  }
}
