import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { fullName, email, phone, postcode, address, propertyType, notes, date, time } = body;

    // Create transporter with Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'bharatpestservice@gmail.com',
        pass: 'rdky vyqe nzxx ksqn',
      },
    });

    // Email content
    const mailOptions = {
      from: 'bharatpestservice@gmail.com',
      to: 'bharatpestservice@gmail.com',
      subject: `New Quote Request from ${fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">New Quote Request</h2>
          
          <h3 style="color: #1e40af; margin-top: 20px;">Customer Details</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;"><strong>Name:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">${fullName}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;"><strong>Email:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;"><strong>Phone:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">${phone}</td>
            </tr>
          </table>

          <h3 style="color: #1e40af; margin-top: 20px;">Property Details</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;"><strong>Address:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">${address}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;"><strong>Postcode:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">${postcode}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;"><strong>Property Type:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">${propertyType}</td>
            </tr>
          </table>

          <h3 style="color: #1e40af; margin-top: 20px;">Job Details</h3>
          <table style="width: 100%; border-collapse: collapse;">
            ${date ? `
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;"><strong>Preferred Date:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">${date}</td>
            </tr>
            ` : ''}
            ${time ? `
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;"><strong>Preferred Time:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">${time}</td>
            </tr>
            ` : ''}
            ${notes ? `
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;"><strong>Additional Notes:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">${notes}</td>
            </tr>
            ` : ''}
          </table>

          <div style="margin-top: 30px; padding: 15px; background-color: #eff6ff; border-left: 4px solid #2563eb;">
            <p style="margin: 0; color: #1e40af;"><strong>Action Required:</strong> Please contact this customer within 2 hours to provide a quote.</p>
          </div>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Quote request sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ success: false, message: 'Failed to send quote request' }, { status: 500 });
  }
}
